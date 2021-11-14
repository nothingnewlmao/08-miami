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

export interface IGameProps {
    initBlock: { xNum: number; yNum: number };
    canvasRef: HTMLCanvasElement;
    gameOverCallback: (points?: number) => void;
    lvlNum: number;
    setScore: (score: number) => void;
}
