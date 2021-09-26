import * as React from 'react';
import Game from 'services/Game/Game';

export interface IGameFieldProps {
    fieldHeight?: number;
    fieldWidth?: number;
}

export const GameField: React.FC<IGameFieldProps> = ({
    fieldHeight = window.innerHeight,
    fieldWidth = window.innerWidth,
}: IGameFieldProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const canvasElem = canvasRef.current;

        if (canvasElem) {
            const game = new Game({
                canvasRef: canvasElem,
                initX: 100,
                initY: 100,
            });
            game.start();
        }
    }, [canvasRef]);

    return <canvas ref={canvasRef} height={fieldHeight} width={fieldWidth} />;
};
