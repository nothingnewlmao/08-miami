import { PERFECT_ONE } from './contants';
import { IPoint } from './types';

export class GameMap {
    ctx: CanvasRenderingContext2D;

    blockHeight: number = PERFECT_ONE;

    blockLineWidth = 1;

    blockWidth: number = PERFECT_ONE;

    mapField: number[][] = [
        [0, 75],
        [],
        [],
        [20, 30],
        [],
        [32, 38],
        [40, 75],
        [],
        [],
        [10, 45],
        [],
        [],
        [10, 25],
        [],
        [],
        [19, 40],
        [],
        [11, 19],
    ];

    blocksCount = 0;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;

        this.blocksCount = this.mapField.reduce(
            (acc, interval) =>
                acc + (interval.length ? interval[1] - interval[0] : 0),
            0,
        );
    }

    randomBlock(): number {
        return Date.now() % this.blocksCount;
    }

    findBlockCoordinates(): IPoint {
        const blockNum = this.randomBlock();

        let prevBlocksCount = 0;
        let blockCountInRow = 0;
        let heightLevel = 0;

        for (let i = 0; i < this.mapField.length; i += 1) {
            if (this.mapField[i].length === 0) {
                continue;
            }
            if (
                prevBlocksCount + this.mapField[i][1] > blockNum &&
                prevBlocksCount + this.mapField[i][0] < blockNum
            ) {
                blockCountInRow = blockNum - prevBlocksCount;
                heightLevel = i;
                break;
            } else {
                prevBlocksCount += this.mapField[i][1] - this.mapField[i][0];
            }
        }

        return {
            x: blockCountInRow * PERFECT_ONE + PERFECT_ONE / 2,
            y:
                window.innerHeight -
                (heightLevel + 1) * PERFECT_ONE -
                PERFECT_ONE * 4,
        };
    }

    closestFloor(
        ballX: number,
        ballY: number,
        containerHeight: number,
    ): number {
        this.randomBlock();
        for (let i = this.mapField.length - 1; i >= 0; i -= 1) {
            if (
                ballY < containerHeight - (i + 1) * this.blockHeight &&
                ballX >= this.mapField[i][0] * this.blockWidth &&
                ballX <= this.mapField[i][1] * this.blockWidth
            ) {
                return containerHeight - (i + 1) * this.blockHeight;
            }
        }

        return containerHeight;
    }

    drawBlock(x: number, y: number): void {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#111E6C';
        this.ctx.lineWidth = this.blockLineWidth;
        this.ctx.rect(x, y, this.blockHeight, this.blockWidth);
        this.ctx.fillStyle = '#A1AEFC';
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
    }

    drawFloor(bottom: number, width: number): void {
        const commonY = bottom - this.blockHeight;
        const blocksCount = Math.ceil(width / this.blockWidth);
        for (let i = 0; i < blocksCount; i += 1) {
            this.drawBlock(i * this.blockWidth, commonY);
        }
    }

    drawMap(bottom: number, width: number): void {
        const fullBlocksCount = Math.ceil(width / this.blockWidth);

        // lvl of drawing
        for (let i = 0; i < this.mapField.length; i += 1) {
            if (this.mapField[i].length === 0) {
                // eslint-disable-next-line no-continue
                continue;
            }
            const [leftestBlockNum, rightestBlockInSchemesNum] =
                this.mapField[i];
            const rightestBlockNum = Math.min(
                rightestBlockInSchemesNum,
                fullBlocksCount,
            );

            for (let j = leftestBlockNum; j < rightestBlockNum; j += 1) {
                this.drawBlock(
                    j * this.blockWidth,
                    bottom - (i + 1) * this.blockHeight,
                );
            }
        }
    }
}
