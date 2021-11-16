import TObjectLiteral from 'types/TObjectLiteral';

import { GameConstants } from '../contants';
import { TLvlCreaser } from '../types';

export class BallMovementChecker {
    map: string[];

    constructor(map: string[], richedKeys: TObjectLiteral) {
        this.map = map;

        Object.entries(richedKeys).forEach(([key, value]) => {
            if (value) {
                this.convertCurrentBlockType(key.toUpperCase());
            }
        });
    }

    public emptyBlocks = ['0', '-', '+'];

    public filledBlock = ['1', 'a', 'b', 'c', 'A'];

    checkNextLvlRiched(ballX: number, ballY: number): TLvlCreaser | null {
        const ballCenterX = ballX + GameConstants.GAMER_DIAMETR / 2;
        const ballCenterY = ballY + GameConstants.GAMER_DIAMETR / 2;

        const blockX = Math.floor(ballCenterX / GameConstants.PERFECT_ONE);
        const blockY = Math.floor(ballCenterY / GameConstants.PERFECT_ONE);

        const blockValue = this.map[blockY].charAt(blockX);

        if (blockValue === '-' || blockValue === '+') {
            return blockValue;
        }

        return null;
    }

    getBlockUnderBallValue(ballX: number, ballY: number): string {
        const ballCenterX = ballX + GameConstants.GAMER_DIAMETR / 2;
        const ballCenterY = ballY + GameConstants.GAMER_DIAMETR;

        const blockX = Math.floor(ballCenterX / GameConstants.PERFECT_ONE);
        const blockY = Math.floor(ballCenterY / GameConstants.PERFECT_ONE);

        return this.map[blockY].charAt(blockX);
    }

    getBlockWasPressed(
        ballX: number,
        ballY: number,
        velY: number,
    ): string | null {
        const blockValue = this.getBlockUnderBallValue(
            ballX,
            ballY + GameConstants.GAMER_DIAMETR / 4,
        );

        if (
            blockValue.toLowerCase() !== blockValue.toUpperCase() &&
            blockValue.toLowerCase() === blockValue &&
            Number.isNaN(parseInt(blockValue, 10)) &&
            velY !== 0
        ) {
            this.convertCurrentBlockType(blockValue.toLocaleUpperCase());

            return blockValue;
        }

        return null;
    }

    isBallCanFall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballBottomY = ballY + GameConstants.GAMER_DIAMETR;
        const yLvl1 = Math.floor((ballBottomY + 3) / GameConstants.PERFECT_ONE);

        const leftBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);
        const rightBlockX = Math.floor(
            (ballX + GameConstants.GAMER_DIAMETR) / GameConstants.PERFECT_ONE,
        );

        const result =
            this.emptyBlocks.includes(this.map[yLvl1].charAt(leftBlockX)) &&
            this.emptyBlocks.includes(this.map[yLvl1].charAt(rightBlockX));

        return result;
    }

    isBallCanJump(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const yLvl1 = Math.floor(ballY / GameConstants.PERFECT_ONE) - 1;

        const leftBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);
        const rightBlockX = Math.floor(
            (ballX + GameConstants.GAMER_DIAMETR) / GameConstants.PERFECT_ONE,
        );

        const result =
            this.emptyBlocks.includes(this.map[yLvl1].charAt(leftBlockX)) &&
            this.emptyBlocks.includes(this.map[yLvl1].charAt(rightBlockX));

        return result;
    }

    isBallStuckInTopWall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const underBallBlockY =
            Math.floor(ballY / GameConstants.PERFECT_ONE) - 1;

        const underBallBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);

        const result = !this.emptyBlocks.includes(
            this.map[underBallBlockY].charAt(underBallBlockX),
        );

        return result;
    }

    isBallCanGoLeft(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballMiddleY = Math.round(
            (ballY + GameConstants.GAMER_DIAMETR / 3) /
                GameConstants.PERFECT_ONE,
        );

        const leftBallX =
            Math.ceil((ballX - 3) / GameConstants.PERFECT_ONE) - 1;

        const result = this.emptyBlocks.includes(
            this.map[ballMiddleY].charAt(leftBallX),
        );

        return result;
    }

    isBallStuckInLeftWall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballCurrentBlockY = Math.floor(ballY / GameConstants.PERFECT_ONE);

        const ballCurrentBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);

        const result = !this.emptyBlocks.includes(
            this.map[ballCurrentBlockY].charAt(ballCurrentBlockX),
        );

        return result;
    }

    isBallCanGoRight(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballMiddleY = Math.round(
            (ballY + GameConstants.GAMER_DIAMETR / 3) /
                GameConstants.PERFECT_ONE,
        );

        const rightBallX =
            Math.ceil(
                (ballX + GameConstants.GAMER_DIAMETR + 3) /
                    GameConstants.PERFECT_ONE,
            ) - 1;

        const result = this.emptyBlocks.includes(
            this.map[ballMiddleY].charAt(rightBallX),
        );

        return result;
    }

    isBallStuckInRightWall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballCurrentBlockY = Math.floor(ballY / GameConstants.PERFECT_ONE);

        const ballCurrentBlockX = Math.floor(
            (ballX + GameConstants.GAMER_DIAMETR) / GameConstants.PERFECT_ONE,
        );

        const result = !this.emptyBlocks.includes(
            this.map[ballCurrentBlockY].charAt(ballCurrentBlockX),
        );

        return result;
    }

    private convertCurrentBlockType(blockSymbol: string): void {
        if (this.emptyBlocks.includes(blockSymbol)) {
            this.emptyBlocks = this.emptyBlocks.filter(
                (i) => i !== blockSymbol,
            );
            this.filledBlock.push(blockSymbol);
        } else {
            this.filledBlock = this.filledBlock.filter(
                (i) => i !== blockSymbol,
            );
            this.emptyBlocks.push(blockSymbol);
        }
    }
}
