import { GameConstants } from '../contants';

export class GameMap {
    ctx: CanvasRenderingContext2D;

    blockLineWidth = 1;

    mapField: string[];

    blocksCount = 0;

    constructor(ctx: CanvasRenderingContext2D, mapField: string[]) {
        this.ctx = ctx;
        this.mapField = mapField;
    }

    drawBlock(x: number, y: number): void {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#111E6C';
        this.ctx.lineWidth = this.blockLineWidth;
        this.ctx.rect(
            x,
            y,
            GameConstants.PERFECT_ONE,
            GameConstants.PERFECT_ONE,
        );
        this.ctx.fillStyle = '#A1AEFC';
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
    }

    drawMap(): void {
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
                    default:
                        break;
                }
            }
        }
    }
}
