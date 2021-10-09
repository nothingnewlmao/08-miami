import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { GlobalStyles } from 'ui/global';
import { themes } from 'ui/themes';
import { SignUpWithData } from 'pages/SignUp';
import { Example } from 'pages/Example/Example';
import { Leaderboard } from 'pages/Leaderboard';
import { LoadingPage } from 'pages/LoadingPage';
import { GamePage } from 'pages/GamePage';
import { Forum } from 'pages/Forum';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const App: FC = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
        <ErrorBoundary>
            <Router>
                <div className="app">
                    <ThemeProvider theme={selectedTheme}>
                        <GlobalStyles />
                        <Switch>
                            <Route exact path="/">
                                <Example setTheme={setSelectedTheme} />
                            </Route>
                            <Route path="/leaderboard">
                                <Leaderboard />
                            </Route>
                            <Route path="/sign-up">
                                <SignUpWithData />
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
                            <Redirect to="/" />
                        </Switch>
                    </ThemeProvider>
                </div>
            </Router>
        </ErrorBoundary>
    );
};

export default App;
