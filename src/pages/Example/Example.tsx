import React, { FC } from 'react';

import { themes } from 'ui/themes';

import { Button } from 'uicomponents/Button';
import { Input } from 'uicomponents/Input';

export const Example: FC<{ setTheme: (val: typeof themes.light) => void }> = ({
    setTheme,
}) => {
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
