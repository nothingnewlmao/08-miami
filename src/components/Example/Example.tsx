import React, { FC } from "react";
import { Button } from "../../../ui/components/Button";
import { themes } from "../../../ui/themes";
import { Input } from "../../../ui/components/Input";

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
