import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import ActionTypes from 'store/auth/actionTypes';

import { SignUpWithData } from 'pages/SignUp';
import { Leaderboard } from 'pages/Leaderboard';
import { LoadingPage } from 'pages/LoadingPage';
import { GamePage } from 'pages/GamePage';
import { Forum } from 'pages/Forum';
import { HomePage } from 'pages/HomePage';
import { SignInWithData } from 'pages/SignIn';
import { UserPageWithRouter } from 'pages/UserPage';
import useIsLoggedIn from 'pages/SignIn/useIsLoggedIn';
import { ChangePasswordPageWithRouter } from 'pages/ChangePasswordPage';
import { ChangeUserInfoPageWithRouter } from 'pages/ChangeUserInfoPage';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';

const App: FC = () => {
    useIsLoggedIn();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ActionTypes.GetUser });
    }, []);

    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <ErrorBoundary>
                <div className="app">
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/leaderboard">
                            <Leaderboard />
                        </Route>
                        <Route path="/sign-up">
                            <SignUpWithData />
                        </Route>
                        <Route path="/sign-in">
                            <SignInWithData />
                        </Route>
                        <Route path="/game">
                            <GamePage />
                        </Route>
                        <Route path="/loading">
                            <LoadingPage />
                        </Route>
                        <Route path="/forum">
                            <Forum />
                        </Route>
                        <Route exact path="/user">
                            <UserPageWithRouter />
                        </Route>
                        <Route path="/user/change-password">
                            <ChangePasswordPageWithRouter />
                        </Route>
                        <Route path="/user/change-info">
                            <ChangeUserInfoPageWithRouter />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default hot(App);
