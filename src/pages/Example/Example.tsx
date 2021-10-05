import React, { FC } from 'react';
import { Button } from 'uicomponents/Button';
import { themes } from 'ui/themes';
import { Input } from 'uicomponents/Input';
import { TSetThemeCb } from 'pages/Example/types';

export const Example: FC<TSetThemeCb> = ({ setTheme }) => {
    const changeThemeToLight = () => {
        setTheme(themes.light);
    };

    const changeThemeToBlue = () => {
        setTheme(themes.sea);
    };

    return (
        <>
            <Button size="l" view="primary" onClick={changeThemeToLight}>
                Светлая тема
            </Button>
            <Button size="s" view="warning" onClick={changeThemeToBlue}>
                Голубая тема
            </Button>
            <Input placeholder="hello" />
        </>
    );
};
