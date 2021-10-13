import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from 'api/axios';

import * as Styled from './styled';

const handleLogOutClick = () => {
    logOut();
};

export const HomePage: FC = () => (
    <Styled.Wrapper>
        <Styled.Container>
            <Styled.MainTitle>Bounce: Returning</Styled.MainTitle>
            <Styled.MenuButton>
                <Link to="/loading">Играть</Link>
            </Styled.MenuButton>
            <Styled.MenuButton>
                <Link to="/user"> Игрок </Link>
            </Styled.MenuButton>
            <Styled.MenuButton>
                <Link to="/leaderboard">Таблица рекордов</Link>
            </Styled.MenuButton>
            <Styled.MenuButton>
                <Link to="/forum">Форум</Link>
            </Styled.MenuButton>
            <Styled.MenuButton onClick={() => handleLogOutClick()}>
                <Link to="/sign-in">Выйти</Link>
            </Styled.MenuButton>
        </Styled.Container>
    </Styled.Wrapper>
);
