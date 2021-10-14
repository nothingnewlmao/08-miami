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
    initPoint: IPoint;
    canvasRef: HTMLCanvasElement;
    gameOverCallback: (points?: number) => void;
    endTime: number;
    setScore: (score: number) => void;
}
