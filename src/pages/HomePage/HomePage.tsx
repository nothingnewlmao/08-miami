import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ActionTypes from 'store/auth/actionTypes';

import * as Styled from './styled';

export const HomePage: FC = () => {
    const dispatch = useDispatch();
    const handleLogOutClick = () => dispatch({ type: ActionTypes.LogOut });

    return (
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
                <Styled.MenuButton onClick={handleLogOutClick}>
                    Выйти
                </Styled.MenuButton>
            </Styled.Container>
        </Styled.Wrapper>
    );
};
