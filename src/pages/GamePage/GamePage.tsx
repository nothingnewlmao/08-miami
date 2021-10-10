import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { GameField } from 'components/GameField/GameField';

import * as Styled from './styled';

export const GamePage: FC = () => {
    const panelHeight = 60;
    const gameHeight = window.innerHeight - panelHeight;
    const gameWidth = window.innerWidth;

    return (
        <Styled.Wrapper>
            <GameField fieldHeight={gameHeight} fieldWidth={gameWidth} />
            <Styled.GamePanel>
                <Styled.BackButton size="s">
                    <Link to="/">На главную страницу</Link>
                </Styled.BackButton>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
