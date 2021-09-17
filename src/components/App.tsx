import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ui/global";
import { themes } from "../../ui/themes";
import { Example } from "./Example/Example";

const App = () => {
    const [selectedTheme, setSelectedTheme] = useState(themes.light);

    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Example setTheme={setSelectedTheme} />
        </ThemeProvider>
    );
};

export default App;
