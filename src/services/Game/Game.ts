import TObjectLiteral from 'types/TObjectLiteral';

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
import { LVLs } from './lvls';
import { ObjectsDrawer } from './services/ObjectsDrawer';
import {
    IPoint,
    ISides,
    IGameProps,
    TLvlOuterCallback,
    TLvlCreaser,
} from './types';

export class Game {
    private ctx: CanvasRenderingContext2D;

    private ballPosition: IPoint;

    private ballMovementChecker: BallMovementChecker;

    private objectsDrawer: ObjectsDrawer;

    private velY: number = 0;

    private velX: number = 0;

    private keys = new Map<string, boolean>();

    private canvasSides: ISides;

    private richedKeys: TObjectLiteral;

    private lvlNum: number;

    private jumpBust = 0;

    lvlOuterCallback: TLvlOuterCallback;

    unsubscribeKeysCallback: () => void = () => {};

    setScore: (points: number) => void;

    animationCallbackId: number = 0;

    constructor({
        initBlock = { x: 1, y: 1 },
        canvasRef,
        lvlOuterCallback,
        setScore,
        lvlNum,
        richedKeys,
        gameHeight,
        gameWidth,
    }: IGameProps) {
        const context = canvasRef.getContext('2d');

        console.log('new game');

        this.setScore = setScore;

        this.lvlOuterCallback = lvlOuterCallback;

        this.richedKeys = { ...richedKeys };

        this.lvlNum = lvlNum;

        if (!context) {
            throw new Error("Отсутствует контекст Canvas'а");
        }

        this.ctx = context;
        this.ballPosition = {
            x: initBlock.x * GameConstants.PERFECT_ONE,
            y: initBlock.y * GameConstants.PERFECT_ONE,
        };

        this.canvasSides = {
            top: 0,
            bottom: gameHeight,
            left: 0,
            right: gameWidth,
        };

        const keydownCallback = (e: KeyboardEvent) => this.keys.set(e.key, true);

        const keyupCallback = (e: KeyboardEvent) => this.keys.set(e.key, false);

        document.body.addEventListener('keydown', keydownCallback);
        document.body.addEventListener('keyup', keyupCallback);

        this.unsubscribeKeysCallback = () => {
            document.body.removeEventListener('keydown', keydownCallback);
            document.body.removeEventListener('keyup', keyupCallback);
        };

        this.objectsDrawer = new ObjectsDrawer(this.ctx, LVLs[lvlNum].map);

        this.ballMovementChecker = new BallMovementChecker(
            LVLs[lvlNum].map,
            richedKeys,
        );
    }

    start() {
        this.animate();
    }

    moveToNextLvl(gateSymbol: TLvlCreaser) {
        cancelAnimationFrame(this.animationCallbackId);
        const moveValue = gateSymbol === '+' ? 1 : -1;
        const initPoint = gateSymbol === '+'
            ? LVLs[this.lvlNum + moveValue].entryPointA
            : LVLs[this.lvlNum + moveValue].entryPointB;
        this.lvlOuterCallback(
            this.lvlNum + moveValue,
            this.richedKeys,
            initPoint,
        );
    }

    animate() {
        this.animationCallbackId = requestAnimationFrame(
            this.animate.bind(this),
        );

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

        const isNextLvlRiched = this.ballMovementChecker.checkNextLvlRiched(
            ballX,
            ballY,
        );

        if (isNextLvlRiched !== null) {
            this.moveToNextLvl(isNextLvlRiched);
        }

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
            if (this.ballMovementChecker.isBallStuckInTopWall(ballX, ballY)) {
                this.ballPosition.y
                    += Math.abs(this.velY)
                    * (this.jumpBust + JUMP_VELOCITY_MODIFICATOR);
                this.jumpBust = 0;
                this.velY = 1.5;
            }
        } else {
            const pressedBlock = this.ballMovementChecker.getBlockWasPressed(
                ballX,
                ballY,
                this.velY,
            );
            if (pressedBlock !== null) {
                if (typeof this.richedKeys[pressedBlock] === 'undefined') {
                    this.richedKeys[pressedBlock] = true;
                } else {
                    this.richedKeys[pressedBlock] = !this.richedKeys[pressedBlock];
                }
            }

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
        }

        this.ctx.clearRect(left, top, right - left, bottom - top);
        this.objectsDrawer.drawBackground(this.canvasSides);

        // this.drawPortal();

        this.objectsDrawer.drawMap(this.richedKeys);
        this.objectsDrawer.drawBall(this.ballPosition);
    }
}
