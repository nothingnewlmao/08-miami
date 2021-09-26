import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { GameField } from '../../components/GameField/GameField';
import { Button } from '../../../ui/components/Button';
import * as Styled from './styled';

export const GamePage: FC = () => {
    const panelHeight = 60;
    const gameHeight = window.innerHeight - panelHeight;
    const gameWidth = window.innerWidth;

    const history = useHistory();

    const gotToMainPage = () => history.push('/');

    return (
        <Styled.Wrapper>
            <GameField fieldHeight={gameHeight} fieldWidth={gameWidth} />
            <Styled.GamePanel>
                <Button size="s" view="warning" onClick={gotToMainPage}>
                    На главную страницу
                </Button>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
