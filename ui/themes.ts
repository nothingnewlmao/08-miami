import { colors } from "./colors";
import { buttonViews } from "./components/Button/buttonViews";
import { inputViews } from "./components/Input/inputViews";

export interface ITheme {
    theme: typeof themes.light & typeof themes.sea;
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
