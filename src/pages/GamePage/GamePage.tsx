import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GameField } from 'components/GameField/GameField';

import { backgroundMusic } from 'services/BackgroundMusic/BackgroundMusic';

import { BackButton, BaseButton } from 'ui/components';

import * as Styled from './styled';

export const GamePage: FC = () => {
    const panelHeight = 60;

    const endTimeSeconds = 10;

    const endTime = Date.now() + 1000 * endTimeSeconds;

    const [time, setTime] = useState(Math.floor((endTime - Date.now()) / 1000));

    const [score, setScore] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(Math.floor((endTime - Date.now()) / 1000));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        backgroundMusic.play();

        return () => backgroundMusic.stop();
    }, []);

    return (
        <Styled.Wrapper>
            <GameField
                heightOffset={panelHeight}
                endTime={endTime}
                setScore={setScore}
            />
            <Styled.GamePanel>
                <BackButton size="s">
                    <Link to="/">На главную страницу</Link>
                </BackButton>
                <BaseButton onClick={() => backgroundMusic.toggleMusic()}>
                    Toggle music
                </BaseButton>
                <Styled.Timer>{time}</Styled.Timer>
                <Styled.Timer>{score} points</Styled.Timer>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
