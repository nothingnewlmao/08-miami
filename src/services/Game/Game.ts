import {
    MAX_GAMER_SPEED,
    GAMER_RAD,
    FALLING_COEF,
    FADING_COEF,
    GAMER_INNER_COEF,
    GAMER_BLICK_COEF,
    LEFT_RIGHT_SPEED_BUST,
    JUMP_BUST_LIMIT,
    JUMP_VELOCITY,
    JUMP_VELOCITY_MODIFICATOR,
    COIN_RAD_X,
    COIN_RAD_Y,
} from './contants';
import { GameMap } from './GameMap';
import { IPoint, ISides, IGameProps } from './types';
import { isInRange } from './utils';

export class Game {
    private ctx: CanvasRenderingContext2D;

    private ballPosition: IPoint;

    private velY: number = 0;

    private velX: number = 0;

    private keys = new Map<string, boolean>();

    private map: GameMap;

    private canvasSides: ISides;

    private endTime: number;

    private jumpBust = 0;

    private score = 0;

    private currentCoinCoords: IPoint;

    gameOverCallback: (points: number) => void;

    unsubscribeKeysCallback: () => void = () => {};

    setScore: (points: number) => void;

    constructor({
        initPoint = { x: window.innerWidth - 100, y: window.innerHeight - 100 },
        canvasRef,
        gameOverCallback,
        endTime,
        setScore,
    }: IGameProps) {
        const context = canvasRef.getContext('2d');

        this.endTime = endTime;

        this.setScore = setScore;

        this.gameOverCallback = gameOverCallback;

        if (!context) {
            throw new Error("Отсутствует контекст Canvas'а");
        }

        this.ctx = context;
        this.ballPosition = { ...initPoint };

        this.canvasSides = {
            top: canvasRef.offsetTop,
            bottom: canvasRef.height + canvasRef.offsetTop,
            left: canvasRef.offsetLeft,
            right: canvasRef.width + canvasRef.offsetLeft,
        };

        const keydownCallback = (e: KeyboardEvent) =>
            this.keys.set(e.key, true);

        const keyupCallback = (e: KeyboardEvent) => this.keys.set(e.key, false);

        document.body.addEventListener('keydown', keydownCallback);
        document.body.addEventListener('keyup', keyupCallback);

        this.unsubscribeKeysCallback = () => {
            document.body.removeEventListener('keydown', keydownCallback);
            document.body.removeEventListener('keyup', keyupCallback);
        };

        this.map = new GameMap(this.ctx);

        this.currentCoinCoords = this.map.findBlockCoordinates();
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const { top, right, bottom, left } = this.canvasSides;

        const { x: ballX, y: ballY } = this.ballPosition;

        const closestFloor = this.map.closestFloor(ballX, ballY, bottom - top);

        if (
            this.velY < MAX_GAMER_SPEED &&
            this.jumpBust === 0 &&
            ballY < closestFloor - GAMER_RAD
        ) {
            this.velY += 2;
        }

        if (this.keys.get('ArrowRight') || this.keys.get('d')) {
            if (this.velX < MAX_GAMER_SPEED) {
                this.velX += +LEFT_RIGHT_SPEED_BUST;
            }
        }

        if (this.keys.get('ArrowUp') || this.keys.get('w')) {
            if (
                this.velY > 0 &&
                this.velY < 0.0001 &&
                this.velY > -MAX_GAMER_SPEED &&
                this.jumpBust === 0
            ) {
                this.velY -= JUMP_VELOCITY;
                this.jumpBust = JUMP_BUST_LIMIT;
            }
        }

        if (this.keys.get('ArrowLeft') || this.keys.get('a')) {
            if (this.velX > -MAX_GAMER_SPEED) {
                this.velX -= LEFT_RIGHT_SPEED_BUST;
            }
        }

        if (this.jumpBust > 0) {
            this.jumpBust -= 1;
            this.ballPosition.y +=
                this.velY * (this.jumpBust + JUMP_VELOCITY_MODIFICATOR);
        } else {
            this.velY *= FALLING_COEF;
            this.ballPosition.y += this.velY;
        }

        this.velX *= FADING_COEF;
        this.ballPosition.x += this.velX;

        if (this.ballPosition.x >= right - GAMER_RAD) {
            this.ballPosition.x = right - GAMER_RAD;
            this.velX = 0;
        } else if (this.ballPosition.x <= left + GAMER_RAD) {
            this.ballPosition.x = left + GAMER_RAD;
            this.velX = 0;
        }

        if (this.ballPosition.y >= closestFloor - GAMER_RAD) {
            this.ballPosition.y = closestFloor - GAMER_RAD;
        } else if (this.ballPosition.y <= top + GAMER_RAD) {
            this.ballPosition.y = top + GAMER_RAD;
        }

        if (Date.now() >= this.endTime) {
            this.unsubscribeKeysCallback();
            this.gameOverCallback(this.score);
        }

        this.ctx.clearRect(left, top, right - left, bottom - top);
        this.drawBackground();

        // this.drawPortal();

        this.map.drawMap(bottom, right - left);
        this.drawCoin();
        this.drawBall();

        this.checkCoinGetted();
    }

    private checkCoinGetted(): void {
        const { x, y } = this.ballPosition;
        if (
            isInRange(this.currentCoinCoords.x, x - GAMER_RAD, x + GAMER_RAD) &&
            isInRange(this.currentCoinCoords.y, y - GAMER_RAD, y + GAMER_RAD)
        ) {
            this.score += 10;
            this.setScore(this.score);
            this.currentCoinCoords = this.map.findBlockCoordinates();
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

    private drawCoin(): void {
        const { x, y } = this.currentCoinCoords;

        this.ctx.beginPath();
        this.ctx.ellipse(x, y, COIN_RAD_X, COIN_RAD_Y, 0, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ffd700';
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.ellipse(x, y, COIN_RAD_X, COIN_RAD_Y, 0, 0, 2 * Math.PI);
        this.ctx.strokeStyle = '#ffa500';
        this.ctx.stroke();
        this.ctx.closePath();
    }

    private drawBackground(): void {
        const { top, right, bottom, left } = this.canvasSides;

        const height = bottom - top;
        const width = right - left;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(left, top, width, height);
    }
}
