import React, { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserPending } from 'store/userProfile/selectors';
import ActionTypes from 'store/auth/actionTypes';

import { SignUpWithData } from 'pages/SignUp';
import { Leaderboard } from 'pages/LeaderBoard';
import { LoadingPage } from 'pages/LoadingPage';
import { GamePage } from 'pages/GamePage';
import { Forum } from 'pages/Forum';
import { HomePage } from 'pages/HomePage';
import { SignInWithData } from 'pages/SignIn';
import { UserPageWithRouter } from 'pages/UserPage';
import { ChangePasswordPageWithRouter } from 'pages/ChangePasswordPage';
import { ChangeUserInfoPageWithRouter } from 'pages/ChangeUserInfoPage';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import ProtectedRoute from 'utils/hocs/protectedRoute';
import history from 'utils/history';

import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';

const App: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ActionTypes.GetUser });
    }, [dispatch]);

    const getUserInfoPending = useSelector(selectUserPending);

    const forPending = getUserInfoPending ? 'pending' : '';

    const ProtectedUser = ProtectedRoute(UserPageWithRouter);
    const ProtectedChangeInfo = ProtectedRoute(ChangeUserInfoPageWithRouter);
    const ProtectedChangepassword = ProtectedRoute(
        ChangePasswordPageWithRouter,
    );

    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <ErrorBoundary>
                <ConnectedRouter history={history}>
                    <div className="app">
                        {forPending ? (
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
                                <Route exact path="/user">
                                    <ProtectedUser />
                                </Route>
                                <Route path="/user/change-password">
                                    <ProtectedChangepassword />
                                </Route>
                                <Route path="/user/change-info">
                                    <ProtectedChangeInfo />
                                </Route>
                                <Redirect to="/" />
                            </Switch>
                        )}
                    </div>
                </ConnectedRouter>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default App;
