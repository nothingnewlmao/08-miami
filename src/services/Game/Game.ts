import GameMap from './GameMap';

export interface IGameProps {
    initX: number;
    initY: number;
    canvasRef: HTMLCanvasElement;
}

export interface ISides {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

const FALLING_COEF = 0.72;
const FADING_COEF = 0.95;
const GAMER_SPEED = 4;
const MAX_JUMP_HEIGHT = 100;

const GAMER_RAD = 15;
const GAMER_INNER_COEF = [3.5714285714285716, -8.33333333, 1.666];
const GAMER_BLICK_COEF = [1.6666, -3.125, 0.2];

export default class Game {
    ctx: CanvasRenderingContext2D;

    x: number;

    y: number;

    velY: number = 0;

    velX: number = 0;

    keys = new Map<string, boolean>();

    map: GameMap;

    canvasSides: ISides;

    constructor({ initX = 0, initY = 0, canvasRef }: IGameProps) {
        const context = canvasRef.getContext('2d');
        if (!context) {
            throw new Error("Отсутствует контекст Canvas'а");
        }
        this.ctx = context;
        this.x = initX;
        this.y = initY;
        this.canvasSides = {
            top: canvasRef.offsetTop,
            bottom: canvasRef.height + canvasRef.offsetTop,
            left: canvasRef.offsetLeft,
            right: canvasRef.width + canvasRef.offsetLeft,
        };

        document.body.addEventListener('keydown', (e: KeyboardEvent) => {
            this.keys.set(e.key, true);
        });

        document.body.addEventListener('keyup', e => {
            this.keys.set(e.key, false);
        });

        this.map = new GameMap(this.ctx);
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        const { top, right, bottom, left } = this.canvasSides;

        const closestFloor = this.map.closestFloor(this.x, this.y, bottom - top);

        if (this.velY < GAMER_SPEED && this.y < closestFloor - GAMER_RAD) {
            this.velY += 2;
        }

        if (this.keys.get('ArrowRight') || this.keys.get('d')) {
            if (this.velX < GAMER_SPEED) {
                this.velX += +1;
            }
        }

        if (this.keys.get('ArrowUp') || this.keys.get('w')) {
            if (
                this.velY < 0.0001 &&
                this.velY > -GAMER_SPEED &&
                closestFloor - this.y < MAX_JUMP_HEIGHT
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
        this.y += this.velY;
        this.velX *= FADING_COEF;
        this.x += this.velX;

        if (this.x >= right - GAMER_RAD) {
            this.x = right - GAMER_RAD;
        } else if (this.x <= left + GAMER_RAD) {
            this.x = left + GAMER_RAD;
        }

        if (this.y >= closestFloor - GAMER_RAD) {
            this.y = closestFloor - GAMER_RAD;
        } else if (this.y <= top + GAMER_RAD) {
            this.y = top + GAMER_RAD;
        }

        this.ctx.clearRect(left, top, right - left, bottom - top);
        this.drawBackground();

        this.map.drawMap(bottom, right - left);
        this.drawBall();
    }

    private drawBackground(): void {
        const { top, right, bottom, left } = this.canvasSides;

        const height = bottom - top;
        const width = right - left;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(left, top, width, height);
    }

    private drawBall = () => {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, GAMER_RAD, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#5f96b3';
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#487288';
        this.ctx.arc(
            this.x + GAMER_RAD / GAMER_INNER_COEF[0],
            this.y + GAMER_RAD / GAMER_INNER_COEF[1],
            GAMER_RAD / GAMER_INNER_COEF[2],
            0,
            2 * Math.PI,
        );
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ead5db';
        this.ctx.arc(
            this.x + GAMER_RAD / GAMER_BLICK_COEF[0],
            this.y + GAMER_RAD / GAMER_BLICK_COEF[1],
            GAMER_RAD * GAMER_BLICK_COEF[2],
            -2,
            1,
        );
        this.ctx.fill();
        this.ctx.closePath();
    };
}
