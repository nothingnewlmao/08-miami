import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GameField } from 'components/GameField/GameField';

import { backgroundMusic } from 'services/BackgroundMusic/BackgroundMusic';

import { Button } from 'ui/components';

import * as Styled from './styled';

export const GamePage: FC = () => {
    const panelHeight = 60;
    const gameHeight = window.innerHeight - panelHeight;
    const gameWidth = window.innerWidth;

    useEffect(() => () => backgroundMusic.pause(), []);

    return (
        <Styled.Wrapper>
            <GameField fieldHeight={gameHeight} fieldWidth={gameWidth} />
            <Styled.GamePanel>
                <Styled.BackButton size="s">
                    <Link to="/">На главную страницу</Link>
                </Styled.BackButton>
                <Button onClick={() => backgroundMusic.toggleMusic()}>
                    Toggle music
                </Button>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
