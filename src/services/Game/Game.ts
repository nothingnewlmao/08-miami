import { GameMap } from './GameMap';
import { IPoint, ISides, IGameProps } from './types';

// movement
const FALLING_COEF = 0.72;
const FADING_COEF = 0.95;
const GAMER_SPEED = 4;
const MAX_JUMP_HEIGHT = 100;

// ball sizes
const GAMER_RAD = 15;
const GAMER_INNER_COEF = [3.5714285714285716, -8.33333333, 1.666];
const GAMER_BLICK_COEF = [1.6666, -3.125, 0.2];

// game over portal sizes
const PORTAL_RAD_X = 10;
const PORTAL_RAD_Y = 22;

export class Game {
    private ctx: CanvasRenderingContext2D;

    private ballPosition: IPoint;

    private gameOverPoint: IPoint;

    private velY: number = 0;

    private velX: number = 0;

    private keys = new Map<string, boolean>();

    private map: GameMap;

    private canvasSides: ISides;

    gameOverCallback: (points?: number) => void;

    unsubscribeKeysCallback: () => void = () => {};

    constructor({
        initPoint = { x: 100, y: 100 },
        gameOverPoint,
        canvasRef,
        gameOverCallback,
    }: IGameProps) {
        const context = canvasRef.getContext('2d');
        this.gameOverCallback = gameOverCallback;

        if (!context) {
            throw new Error("Отсутствует контекст Canvas'а");
        }

        this.ctx = context;
        this.ballPosition = { ...initPoint };
        this.gameOverPoint = { ...gameOverPoint };

        this.canvasSides = {
            top: canvasRef.offsetTop,
            bottom: canvasRef.height + canvasRef.offsetTop,
            left: canvasRef.offsetLeft,
            right: canvasRef.width + canvasRef.offsetLeft,
        };

        const keydownCallback = (e: KeyboardEvent) => this.keys.set(e.key, true);
        const keyupCallback = (e: KeyboardEvent) => this.keys.set(e.key, false);

        document.body.addEventListener('keydown', keydownCallback);
        document.body.addEventListener('keyup', keyupCallback);

        this.unsubscribeKeysCallback = () => {
            document.body.removeEventListener('keydown', keydownCallback);
            document.body.removeEventListener('keyup', keyupCallback);
        };

        this.map = new GameMap(this.ctx);
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const {
            top, right, bottom, left,
        } = this.canvasSides;

        const { x: ballX, y: ballY } = this.ballPosition;

        const closestFloor = this.map.closestFloor(ballX, ballY, bottom - top);

        if (this.velY < GAMER_SPEED && ballY < closestFloor - GAMER_RAD) {
            this.velY += 2;
        }

        if (this.keys.get('ArrowRight') || this.keys.get('d')) {
            if (this.velX < GAMER_SPEED) {
                this.velX += +1;
            }
        }

        if (this.keys.get('ArrowUp') || this.keys.get('w')) {
            if (
                this.velY < 0.0001
                && this.velY > -GAMER_SPEED
                && closestFloor - ballY < MAX_JUMP_HEIGHT
            ) {
                this.velY -= 6;
            }
        }

        if (this.keys.get('ArrowLeft') || this.keys.get('a')) {
            if (this.velX > -GAMER_SPEED) {
                this.velX -= 1;
            }
        }

        this.velY *= FALLING_COEF;
        this.ballPosition.y += this.velY;
        this.velX *= FADING_COEF;
        this.ballPosition.x += this.velX;

        if (this.ballPosition.x >= right - GAMER_RAD) {
            this.ballPosition.x = right - GAMER_RAD;
        } else if (this.ballPosition.x <= left + GAMER_RAD) {
            this.ballPosition.x = left + GAMER_RAD;
        }

        if (this.ballPosition.y >= closestFloor - GAMER_RAD) {
            this.ballPosition.y = closestFloor - GAMER_RAD;
        } else if (this.ballPosition.y <= top + GAMER_RAD) {
            this.ballPosition.y = top + GAMER_RAD;
        }

        this.checkWin();

        this.ctx.clearRect(left, top, right - left, bottom - top);
        this.drawBackground();

        this.drawPortal();

        this.map.drawMap(bottom, right - left);
        this.drawBall();
    }

    private checkWin(): void {
        const { x, y } = this.ballPosition;
        if (
            x - GAMER_RAD < this.gameOverPoint.x
            && x + GAMER_RAD > this.gameOverPoint.x
            && y - GAMER_RAD < this.gameOverPoint.y
            && y + GAMER_RAD > this.gameOverPoint.y
        ) {
            this.gameOverCallback();
        }
    }

    private drawBall = () => {
        const { x, y } = this.ballPosition;

        this.ctx.beginPath();
        this.ctx.arc(x, y, GAMER_RAD, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#5f96b3';
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#487288';
        this.ctx.arc(
            x + GAMER_RAD / GAMER_INNER_COEF[0],
            y + GAMER_RAD / GAMER_INNER_COEF[1],
            GAMER_RAD / GAMER_INNER_COEF[2],
            0,
            2 * Math.PI,
        );
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#ead5db';
        this.ctx.arc(
            x + GAMER_RAD / GAMER_BLICK_COEF[0],
            y + GAMER_RAD / GAMER_BLICK_COEF[1],
            GAMER_RAD * GAMER_BLICK_COEF[2],
            -2,
            1,
        );
        this.ctx.fill();
        this.ctx.closePath();
    };

    private drawPortal(): void {
        const { x, y } = this.gameOverPoint;

        this.ctx.beginPath();
        this.ctx.ellipse(x, y, PORTAL_RAD_X, PORTAL_RAD_Y, 0, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#7FFF00';
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.ellipse(x, y, PORTAL_RAD_X, PORTAL_RAD_Y, 0, 0, 2 * Math.PI);
        this.ctx.strokeStyle = 'gray';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    private drawBackground(): void {
        const {
            top, right, bottom, left,
        } = this.canvasSides;

        const height = bottom - top;
        const width = right - left;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(left, top, width, height);
    }
}
