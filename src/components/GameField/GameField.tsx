import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Game } from 'services/Game';

export interface IGameFieldProps {
    heightOffset?: number;
    widthOffset?: number;
    endTime: number;
    setScore: (score: number) => void;
}

export const GameField: React.FC<IGameFieldProps> = ({
    heightOffset = 0,
    widthOffset = 0,
    endTime,
    setScore,
}: IGameFieldProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const history = useHistory();

    useEffect(() => {
        const canvasElem = canvasRef.current;

        if (canvasElem && window) {
            const gameOverCallback = () => history.push('/leaderboard');

            const game = new Game({
                canvasRef: canvasElem,
                initPoint: {
                    x: 0,
                    y: 0,
                },
                gameOverCallback,
                endTime,
                setScore,
            });
            game.start();

            return () => {
                game.unsubscribeKeysCallback();
            };
        }

        return () => {};
    }, [canvasRef]);

    return (
        <canvas
            ref={canvasRef}
            height={window.innerHeight - heightOffset}
            width={window.innerWidth - widthOffset}
        />
    );
};
