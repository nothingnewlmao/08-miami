import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addLeaderboard } from 'api/leaderboardApi';
import { AxiosError } from 'axios';

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

        if (canvasElem) {
            const gameOverCallback = () => {
                const newData = {
                    miami7: 2,

                };
                const requestData = {
                    data: newData,
                    ratingFieldName: 'miami7',
                    teamName: 'miami7',
                };
                addLeaderboard(requestData)
                    .catch((err: AxiosError) => {
                        if (err.response?.status === 401) {
                            // history.push('/login');
                            console.log('err');
                        }
                    });
                history.push('/leaderboard');
            };

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
