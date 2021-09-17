import { colors } from "./colors";
import { buttonViews } from "./components/Button/buttonViews";
import { inputViews } from "./components/Input/inputViews";

export interface ITheme {
    theme: IThemeType;
}

interface IThemeType {
    colors: IElement;
}

interface IElement {
    body: string;
    text: string;
    buttons: any;
    inputs: any;
}

export const themes = {
    light: {
        colors: {
            body: colors.gray,
            text: colors.white,
            buttons: buttonViews.light,
            inputs: inputViews.light,
        },
    },
    sea: {
        colors: {
            body: colors.lightPrimary,
            text: colors.primary,
            buttons: buttonViews.sea,
            inputs: inputViews.sea,
        },
    },
};
