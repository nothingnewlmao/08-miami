import { GAMER_RAD, GAMER_INNER_COEF, GAMER_BLICK_COEF } from '../contants';
import { IPoint, ISides } from '../types';

export class ObjectsDrawer {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public drawBall(ballPosition: IPoint): void {
        const { x, y } = ballPosition;

        this.ctx.beginPath();
        this.ctx.arc(x + GAMER_RAD, y + GAMER_RAD, GAMER_RAD, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#5f96b3';
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#487288';
        this.ctx.arc(
            x + GAMER_RAD + GAMER_RAD / GAMER_INNER_COEF[0],
            y + GAMER_RAD + GAMER_RAD / GAMER_INNER_COEF[1],
            GAMER_RAD / GAMER_INNER_COEF[2],
            0,
            2 * Math.PI,
        );
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = '#ead5db';
        this.ctx.arc(
            x + GAMER_RAD + GAMER_RAD / GAMER_BLICK_COEF[0],
            y + GAMER_RAD + GAMER_RAD / GAMER_BLICK_COEF[1],
            GAMER_RAD * GAMER_BLICK_COEF[2],
            -2,
            1,
        );
        this.ctx.fill();
        this.ctx.closePath();
    }

    public drawBackground(canvasSides: ISides): void {
        const {
            top, right, bottom, left,
        } = canvasSides;

        const height = bottom - top;
        const width = right - left;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(left, top, width, height);
    }

    // private drawCoin(): void {
    //     const { x, y } = this.currentCoinCoords;

    //     this.ctx.beginPath();
    //     this.ctx.ellipse(x, y, COIN_RAD_X, COIN_RAD_Y, 0, 0, 2 * Math.PI);
    //     this.ctx.fillStyle = '#ffd700';
    //     this.ctx.fill();
    //     this.ctx.closePath();

    //     this.ctx.beginPath();
    //     this.ctx.ellipse(x, y, COIN_RAD_X, COIN_RAD_Y, 0, 0, 2 * Math.PI);
    //     this.ctx.strokeStyle = '#ffa500';
    //     this.ctx.stroke();
    //     this.ctx.closePath();
    // }

    // private checkCoinGetted(): void {
    //     const { x, y } = this.ballPosition;
    //     if (
    //         isInRange(this.currentCoinCoords.x, x - GAMER_RAD, x + GAMER_RAD) &&
    //         isInRange(this.currentCoinCoords.y, y - GAMER_RAD, y + GAMER_RAD)
    //     ) {
    //         this.score += 10;
    //         this.setScore(this.score);
    //     }
    // }
}
