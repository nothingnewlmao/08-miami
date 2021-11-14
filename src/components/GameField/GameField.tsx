import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { isServer } from 'store/rootStore';

import { Game } from 'services/Game';
import { GameConstants } from 'services/Game/contants';
import { LVLs } from 'services/Game/lvls';

export interface IGameFieldProps {
    heightOffset?: number;
    widthOffset?: number;
    setScore: (score: number) => void;
    lvlNumber: number;
}

export const GameField: React.FC<IGameFieldProps> = ({
    setScore,
    lvlNumber,
}: IGameFieldProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const history = useHistory();

    const [height, setHeight] = useState(
        Math.floor(GameConstants.PERFECT_ONE * LVLs[lvlNumber].length),
    );

    const [width, setWidth] = useState(
        Math.floor(GameConstants.PERFECT_ONE * LVLs[lvlNumber][0].length),
    );

    useEffect(() => {
        const canvasElem = canvasRef.current;

        const updateSize = () => {
            setWidth(
                Math.floor(GameConstants.PERFECT_ONE * LVLs[lvlNumber].length),
            );
            setHeight(
                Math.floor(
                    GameConstants.PERFECT_ONE * LVLs[lvlNumber][0].length,
                ),
            );
        };

        if (canvasElem && !isServer) {
            const gameOverCallback = () => {
                history.push('/leaderboard');
            };

            const game = new Game({
                canvasRef: canvasElem,
                initBlock: {
                    xNum: 1,
                    yNum: 1,
                },
                gameOverCallback,
                setScore,
                lvlNum: lvlNumber,
            });
            game.start();

            return () => {
                game.unsubscribeKeysCallback();

                window.addEventListener('resize', updateSize);
            };
        }

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, [canvasRef]);

    return (
        <div
            style={{
                display: 'flex',
                height: 'calc(100% - 60px)',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    height: `${Math.floor(
                        GameConstants.PERFECT_ONE * LVLs[lvlNumber].length,
                    )}px`,
                    width: `${Math.floor(
                        GameConstants.PERFECT_ONE * LVLs[lvlNumber][0].length,
                    )}px`,
                    border: '1px solid #111E6C',
                }}
            >
                <canvas ref={canvasRef} height={height} width={width} />
            </div>
        </div>
    );
};
