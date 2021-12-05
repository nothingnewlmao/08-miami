import React, {
    FC, useCallback,
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentUser } from 'store/userProfile/selectors';
import ActionTypes from 'store/userProfile/actionTypes';

import { BaseButton } from 'ui/components';

import * as Styled from './styled';

export const HomePage: FC = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const changeToLight = useCallback(() => {
        dispatch({
            type: ActionTypes.ChangeInfo,
            payload: { ...user, theme: 'light' },
        });
        dispatch({ type: ActionTypes.ChangeTheme, payload: 'light' });
    }, [dispatch]);

    const changeToBlue = useCallback(() => {
        dispatch({
            type: ActionTypes.ChangeInfo,
            payload: { ...user, theme: 'sea' },
        });
        dispatch({ type: ActionTypes.ChangeTheme, payload: 'sea' });
    }, [dispatch]);

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <h2>Текущая тема</h2>
                <ul>
                    <BaseButton onClick={changeToLight} disabled={user ? user.theme === 'light' : false}>Светлая</BaseButton>
                    <BaseButton onClick={changeToBlue} disabled={user ? user.theme === 'sea' : false}>Морская</BaseButton>
                </ul>
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
            </Styled.Container>
        </Styled.Wrapper>
    );
};
