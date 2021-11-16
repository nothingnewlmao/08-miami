import TObjectLiteral from 'types/TObjectLiteral';

import {
    GAMER_RAD,
    GAMER_INNER_COEF,
    GAMER_BLICK_COEF,
    GameConstants,
} from '../contants';
import { IPoint, ISides } from '../types';

export class ObjectsDrawer {
    private ctx: CanvasRenderingContext2D;

    blockLineWidth = 1;

    mapField: string[];

    constructor(ctx: CanvasRenderingContext2D, mapField: string[]) {
        this.ctx = ctx;
        this.mapField = mapField;
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
        const { top, right, bottom, left } = canvasSides;

        const height = bottom - top;
        const width = right - left;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(left, top, width, height);
    }

    // eslint-disable-next-line max-params
    drawBlock(
        x: number,
        y: number,
        fillColor: string = '#A1AEFC',
        strokeColor: string = '#111E6C',
        innerSymbolColor?: string,
    ): void {
        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = this.blockLineWidth;
        this.ctx.rect(
            x,
            y,
            GameConstants.PERFECT_ONE,
            GameConstants.PERFECT_ONE,
        );
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();

        if (typeof innerSymbolColor !== 'undefined' && !!innerSymbolColor) {
            this.ctx.beginPath();
            this.ctx.rect(
                x + GameConstants.PERFECT_ONE / 4,
                y + GameConstants.PERFECT_ONE / 4,
                GameConstants.PERFECT_ONE / 2,
                GameConstants.PERFECT_ONE / 2,
            );

            this.ctx.fillStyle = innerSymbolColor;
            this.ctx.fill();
            this.ctx.closePath();
        }
    }

    private drawGate(x: number, y: number): void {
        this.ctx.beginPath();
        this.ctx.ellipse(
            x + GameConstants.PERFECT_ONE / 2,
            y + GameConstants.PERFECT_ONE / 2,
            GameConstants.PERFECT_ONE / 3,
            GameConstants.PERFECT_ONE / 2,
            0,
            0,
            2 * Math.PI,
        );
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawMap(richedKeys: TObjectLiteral): void {
        // lvl of drawing
        for (let i = 0; i < this.mapField.length; i += 1) {
            const lvl = this.mapField[i];

            for (let j = 0; j < lvl.length; j += 1) {
                const block = lvl[j];

                switch (block) {
                    case '0':
                        break;
                    case '1':
                        this.drawBlock(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                        );
                        break;
                    case 'a': {
                        this.drawBlock(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                            'yellow',
                            'darkgray',
                            richedKeys.a ? 'green' : undefined,
                        );
                        break;
                    }
                    case 'A': {
                        this.drawBlock(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                            'yellow',
                            richedKeys.a ? 'yellow' : 'gray',
                        );
                        break;
                    }
                    case 'b': {
                        this.drawBlock(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                            'tomato',
                            'gray',
                            richedKeys.b ? 'purple' : undefined,
                        );
                        break;
                    }
                    case 'B': {
                        this.drawBlock(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                            'tomato',
                            richedKeys.b ? 'tomato' : 'purple',
                        );
                        break;
                    }
                    case '+':
                    case '-':
                        this.drawGate(
                            j * GameConstants.PERFECT_ONE,
                            i * GameConstants.PERFECT_ONE,
                        );
                        break;
                    default:
                        break;
                }
            }
        }
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
