import React, { useState } from "react";
import { Button } from "../../ui/components/Button";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/global";
import { themes } from "../../ui/themes";
import { Input } from "../../ui/components/Input";

const App = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    const changeThemeToLight = () => {
        setSelectedTheme(themes.light);
    };

    const changeThemeToBlue = () => {
        setSelectedTheme(themes.sea);
    };

    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Button size="l" view="primary" onClick={changeThemeToLight}>
                Светлая тема
            </Button>
            <Button size="s" view="warning" onClick={changeThemeToBlue}>
                Голубая тема
            </Button>
            <Input placeholder="hello" />
        </ThemeProvider>
    );
};

export default App;
