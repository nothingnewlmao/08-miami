import * as React from 'react';
import { Game } from 'services/Game/Game';

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
            const gameOverCallback = () => console.log('Game Over');

            const game = new Game({
                canvasRef: canvasElem,
                initPoint: {
                    x: 100,
                    y: 100,
                },
                gameOverPoint: {
                    x: fieldWidth - 50,
                    y: fieldHeight - 50,
                },
                gameOverCallback,
            });
            game.start();

            return () => {
                game.unsubscribeKeysCallback();
            };
        }

        return () => {};
    }, [canvasRef]);

    return <canvas ref={canvasRef} height={fieldHeight} width={fieldWidth} />;
};
