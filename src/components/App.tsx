import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { GlobalStyles } from 'UI/global';
import { themes } from 'UI/themes';
import { SignUp } from 'Pages/SignUp/SignUp';
import { Example } from './Example/Example';
import { Leaderboard } from './Leaderboard';

const App: FC = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
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
                            <SignUp />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </ThemeProvider>
            </div>
        </Router>
    );
};

export default App;
