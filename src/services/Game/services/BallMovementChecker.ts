import { GameConstants } from '../contants';

export class BallMovementChecker {
    map: string[];

    constructor(map: string[]) {
        this.map = map;
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

        const result = this.map[yLvl1].charAt(leftBlockX) === '0'
            && this.map[yLvl1].charAt(rightBlockX) === '0';

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

        const result = this.map[yLvl1].charAt(leftBlockX) === '0'
            && this.map[yLvl1].charAt(rightBlockX) === '0';

        return result;
    }

    isBallStuckInTopWall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballCurrentBlockY = Math.floor(ballY / GameConstants.PERFECT_ONE) + 1;

        const ballCurrentBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);

        const result = this.map[ballCurrentBlockY].charAt(ballCurrentBlockX) === '1';

        return result;
    }

    isBallCanGoLeft(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballMiddleY = Math.round(
            (ballY + GameConstants.GAMER_DIAMETR / 3)
                / GameConstants.PERFECT_ONE,
        );

        const leftBallX = Math.ceil((ballX - 3) / GameConstants.PERFECT_ONE) - 1;

        const result = this.map[ballMiddleY].charAt(leftBallX) === '0';

        return result;
    }

    isBallStuckInLeftWall(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballCurrentBlockY = Math.floor(ballY / GameConstants.PERFECT_ONE);

        const ballCurrentBlockX = Math.floor(ballX / GameConstants.PERFECT_ONE);

        const result = this.map[ballCurrentBlockY].charAt(ballCurrentBlockX) === '1';

        return result;
    }

    isBallCanGoRight(ballX: number, ballY: number): boolean {
        // eslint-disable-next-line no-param-reassign
        ballX = Math.round(ballX * 100000000) / 100000000;
        // eslint-disable-next-line no-param-reassign
        ballY = Math.round(ballY * 100000000) / 100000000;

        const ballMiddleY = Math.round(
            (ballY + GameConstants.GAMER_DIAMETR / 3)
                / GameConstants.PERFECT_ONE,
        );

        const rightBallX = Math.ceil(
            (ballX + GameConstants.GAMER_DIAMETR + 3)
                    / GameConstants.PERFECT_ONE,
        ) - 1;

        const result = this.map[ballMiddleY].charAt(rightBallX) === '0';

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

        const result = this.map[ballCurrentBlockY].charAt(ballCurrentBlockX) === '1';

        return result;
    }
}
