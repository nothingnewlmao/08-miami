import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '../../ui/global';
import { themes } from '../../ui/themes';
import { Example } from './Example/Example';
import { Leaderboard } from './Leaderboard/Leaderboard';

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
                        <Route exact path="/leaderboard">
                            <Leaderboard />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </div>
        </Router>
    );
};

export default App;
