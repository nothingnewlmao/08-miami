import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../ui/global';
import { themes } from '../../ui/themes';
import { Example } from './Example/Example';
import { Leaderboard } from './Leaderboard/Leaderboard';

const App: FC = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Leaderboard />
            <Example setTheme={setSelectedTheme} />
        </ThemeProvider>
    );
};

export default App;
