import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import { SignUpWithData } from 'pages/SignUp';
import { Leaderboard } from 'pages/Leaderboard';
import { LoadingPage } from 'pages/LoadingPage';
import { GamePage } from 'pages/GamePage';
import { Forum } from 'pages/Forum';
import { HomePage } from 'pages/HomePage';
import { SignInWithData } from 'pages/SignIn';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

import history from 'utils/history';

import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';

import { UserPageWithRouter } from './UserPage';

const App: FC = () => (
    <ThemeProvider theme={themes.light}>
        <GlobalStyles />
        <ErrorBoundary>
            <ConnectedRouter history={history}>
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
                        <Route path="/user">
                            <UserPageWithRouter />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </ConnectedRouter>
        </ErrorBoundary>
    </ThemeProvider>
);

export default App;
