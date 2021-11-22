import TObjectLiteral from 'types/TObjectLiteral';

export interface ISides {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export interface IPoint {
    x: number;
    y: number;
}

export enum LvlCreaser {
    Back = '-',
    Forward = '+',
}

export type TLvlOuterCallback = (
    lvlNum: number,
    reachedKeys: TObjectLiteral,
    newInitPoint: IPoint,
) => void;

export interface IGameProps {
    initBlock: IPoint;
    canvasRef: HTMLCanvasElement;
    lvlOuterCallback: TLvlOuterCallback;
    lvlNum: number;
    setScore: (score: number) => void;
    reachedKeys: TObjectLiteral;
    gameHeight: number;
    gameWidth: number;
}

export interface IGameSessionProps {
    lvlNum: number;
    reachedKeys: TObjectLiteral;
}
