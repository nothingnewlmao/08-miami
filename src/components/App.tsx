import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import { GlobalStyles } from '../../ui/global';
import { themes } from '../../ui/themes';
import { Example } from './Example/Example';

const App: FC = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
        <div className="app">
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyles />
                <ul>
                    <li>
                        <Link to="/">root</Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path='/'>
                        <Example setTheme={setSelectedTheme} />
                    </Route>
                    <Route path='/about'>
                        <div className="about">
                            <h2>About</h2>
                        </div>
                    </Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
};

export default App;
