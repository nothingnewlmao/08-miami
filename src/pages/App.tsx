import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';
import { SignUp } from 'pages/SignUp';
import { Leaderboard } from 'pages/Leaderboard';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { LoadingPage } from 'pages/LoadingPage';
import { ErrorMessage } from 'pages/ErrorMessage';
import { GamePage } from 'pages/GamePage';
import { HomePage } from 'pages/HomePage';

const App: FC = () => (
    <ErrorBoundary>
        <Router>
            <div className="app">
                <ThemeProvider theme={themes.light}>
                    <GlobalStyles />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/leaderboard">
                            <Leaderboard />
                        </Route>
                        <Route path="/sign-up">
                            <SignUp />
                        </Route>
                        <Route path="/game">
                            <GamePage />
                        </Route>
                        <Route path="/loading">
                            <LoadingPage />
                        </Route>
                        <Route path="/error">
                            <ErrorMessage />
                        </Route>

                        <Redirect to="/" />
                    </Switch>
                </ThemeProvider>
            </div>
        </Router>
    </ErrorBoundary>
);

export default App;
