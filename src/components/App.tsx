import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Forum } from '../pages/Forum/Forum';
import { GlobalStyles } from '../../ui/global';
import { themes } from '../../ui/themes';
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
                        <Route path="/forum">
                            <Forum />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </ThemeProvider>
            </div>
        </Router>
    );
};

export default App;
