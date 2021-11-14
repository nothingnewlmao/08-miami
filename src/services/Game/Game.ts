import { BallMovementChecker } from './services/BallMovementChecker';
import {
    MAX_GAMER_SPEED,
    GAMER_RAD,
    FALLING_COEF,
    FADING_COEF,
    LEFT_RIGHT_SPEED_BUST,
    JUMP_BUST_LIMIT,
    JUMP_VELOCITY,
    JUMP_VELOCITY_MODIFICATOR,
    GameConstants,
} from './contants';
import { GameMap } from './services/GameMap';
import { LVLs } from './lvls';
import { ObjectsDrawer } from './services/ObjectsDrawer';
import { IPoint, ISides, IGameProps } from './types';

export class Game {
    private ctx: CanvasRenderingContext2D;

    private ballPosition: IPoint;

    private gameMap: GameMap;

    private ballMovementChecker: BallMovementChecker;

    private objectsDrawer: ObjectsDrawer;

    private velY: number = 0;

    private velX: number = 0;

    private keys = new Map<string, boolean>();

    private canvasSides: ISides;

    private jumpBust = 0;

    gameOverCallback: (points: number) => void;

    unsubscribeKeysCallback: () => void = () => {};

    setScore: (points: number) => void;

    constructor({
        initBlock = { xNum: 1, yNum: 1 },
        canvasRef,
        gameOverCallback,
        setScore,
        lvlNum,
    }: IGameProps) {
        const context = canvasRef.getContext('2d');

        this.setScore = setScore;

        this.gameOverCallback = gameOverCallback;

        if (!context) {
            throw new Error("Отсутствует контекст Canvas'а");
        }

        this.ctx = context;
        this.ballPosition = {
            x: initBlock.xNum * GameConstants.PERFECT_ONE,
            y: initBlock.yNum * GameConstants.PERFECT_ONE,
        };

        this.canvasSides = {
            top: 0,
            bottom: canvasRef.height + canvasRef.offsetTop,
            left: 0,
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

        this.gameMap = new GameMap(this.ctx, LVLs[lvlNum]);

        this.ballMovementChecker = new BallMovementChecker(LVLs[lvlNum]);

        this.objectsDrawer = new ObjectsDrawer(this.ctx);
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

        const isBallCanFall = this.ballMovementChecker.isBallCanFall(
            ballX,
            ballY,
        );

        const isBallCanGoLeft = this.ballMovementChecker.isBallCanGoLeft(
            ballX,
            ballY,
        );

        const isBallCanGoRight = this.ballMovementChecker.isBallCanGoRight(
            ballX,
            ballY,
        );

        if (
            this.velY < MAX_GAMER_SPEED
            && this.jumpBust === 0
            && isBallCanFall
        ) {
            this.velY += 2;
        }

        if (this.keys.get('ArrowRight') || this.keys.get('d')) {
            if (this.velX < MAX_GAMER_SPEED) {
                this.velX += +LEFT_RIGHT_SPEED_BUST;
            }
        }

        if (this.keys.get('ArrowUp') || this.keys.get('w')) {
            if (this.ballMovementChecker.isBallCanJump(ballX, ballY)) {
                if (
                    this.velY >= 0
                    && this.velY > -MAX_GAMER_SPEED
                    && this.jumpBust === 0
                    && !isBallCanFall
                ) {
                    this.velY = -JUMP_VELOCITY;
                    this.jumpBust = JUMP_BUST_LIMIT;
                }
            }
        }

        if (this.keys.get('ArrowLeft') || this.keys.get('a')) {
            if (this.velX > -MAX_GAMER_SPEED) {
                this.velX -= LEFT_RIGHT_SPEED_BUST;
            }
        }

        if (this.jumpBust > 0) {
            this.jumpBust -= 1;
            this.ballPosition.y
                -= Math.abs(this.velY)
                * (this.jumpBust + JUMP_VELOCITY_MODIFICATOR);
        } else {
            this.velY = Math.abs(this.velY) * FALLING_COEF;
            this.ballPosition.y += this.velY;

            if (this.velY > 0.0001) {
                this.velY = 0;
            }
        }

        this.velX *= FADING_COEF;

        this.ballPosition.x += this.velX;

        if (!isBallCanGoRight) {
            if (this.ballMovementChecker.isBallStuckInRightWall(ballX, ballY)) {
                this.velX = -this.velX;
                this.ballPosition.x += 2 * this.velX;
            } else {
                this.ballPosition.x = Math.ceil(
                    (this.ballPosition.x / GameConstants.PERFECT_ONE)
                        * GameConstants.PERFECT_ONE,
                );
            }
        } else if (!isBallCanGoLeft) {
            if (this.ballMovementChecker.isBallStuckInLeftWall(ballX, ballY)) {
                this.velX = -this.velX;
                this.ballPosition.x += 2 * this.velX;
            } else {
                this.ballPosition.x = Math.ceil(
                    (this.ballPosition.x / GameConstants.PERFECT_ONE)
                        * GameConstants.PERFECT_ONE,
                );
            }
        }

        if (!isBallCanFall && this.velY < 0.0000001) {
            this.ballPosition.y = Math.floor(this.ballPosition.y / GameConstants.PERFECT_ONE)
                    * GameConstants.PERFECT_ONE
                + GameConstants.PERFECT_ONE
                - 2 * GAMER_RAD;
        } else if (this.ballPosition.y <= top + GAMER_RAD) {
            this.ballPosition.y = top + GameConstants.GAMER_DIAMETR;
        }

        this.ctx.clearRect(left, top, right - left, bottom - top);
        this.objectsDrawer.drawBackground(this.canvasSides);

        // this.drawPortal();

        this.gameMap.drawMap();
        this.objectsDrawer.drawBall(this.ballPosition);
    }
}
