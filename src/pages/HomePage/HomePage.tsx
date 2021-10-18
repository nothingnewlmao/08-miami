import React, { FC, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from 'api/authApi';

import * as Styled from './styled';

export const HomePage: FC = () => {
    const history = useHistory();

    const LogOut: any = () => {
        logOut().then(() => {
            history.push('/sign-in');
        });
    };

    const handleLogOutClick = useCallback(LogOut, []);

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
