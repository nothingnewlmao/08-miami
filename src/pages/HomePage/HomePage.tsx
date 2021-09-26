import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';

export const HomePage: FC = () => (
    <Styled.Wrapper>
        <Styled.Container>
            <Styled.Title>Bounce: Returning</Styled.Title>
            <Styled.MenuButton>
                <Link to="/loading">Играть</Link>
            </Styled.MenuButton>
            <Styled.MenuButton>
                <Link to="/leaderboard">Таблица рекордов</Link>
            </Styled.MenuButton>
            <Styled.MenuButton>
                <Link to="/forum">Форум</Link>
            </Styled.MenuButton>
        </Styled.Container>
    </Styled.Wrapper>
);
