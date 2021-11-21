import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import { selectUserPending } from 'store/userProfile/selectors';
import ActionTypesLeaderboard from 'store/leaderboard/actionTypes';
import ActionTypesUser from 'store/auth/actionTypes';

import { SignUpWithData } from 'pages/SignUp';
import { Leaderboard } from 'pages/Leaderboard';
import { LoadingPage } from 'pages/LoadingPage';
import { GamePage } from 'pages/GamePage';
import { Forum } from 'pages/Forum';
import { HomePage } from 'pages/HomePage';
import { SignInWithData } from 'pages/SignIn';
import { UserPageWithRouter } from 'pages/UserPage';
import useOAuth from 'pages/SignIn/useOAuth';
import { ChangePasswordPageWithRouter } from 'pages/ChangePasswordPage';
import { ChangeUserInfoPageWithRouter } from 'pages/ChangeUserInfoPage';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';

import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';

const App: FC = () => {
    useOAuth();

    const dispatch = useDispatch();

    const isPending = useSelector(selectUserPending);
    useEffect(() => {
        dispatch({ type: ActionTypesUser.GetUser });
        dispatch({ type: ActionTypesLeaderboard.GetLeaderboard });
    }, [dispatch]);

    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <ErrorBoundary>
                <div className="app">
                    {isPending ? (
                        'pending'
                    ) : (
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
                            <ProtectedRoute exact path="/user">
                                <UserPageWithRouter />
                            </ProtectedRoute>
                            <ProtectedRoute path="/user/change-password">
                                <ChangePasswordPageWithRouter />
                            </ProtectedRoute>
                            <ProtectedRoute path="/user/change-info">
                                <ChangeUserInfoPageWithRouter />
                            </ProtectedRoute>
                            <Redirect to="/" />
                        </Switch>
                    )}
                </div>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default hot(App);
