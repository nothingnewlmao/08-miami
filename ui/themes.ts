import { colors } from './colors';
import { buttonViews } from './components/Button/buttonViews';
import { inputViews } from './components/Input/inputViews';

export interface ITheme {
  theme: typeof themes.light & typeof themes.sea;
}

export const themes = {
    light: {
        colors: {
            body: colors.white,
            text: colors.black,
            textInversion: colors.white,
            buttons: buttonViews.light,
            inputs: inputViews.light,
        },
    },
    sea: {
        colors: {
            body: colors.lightPrimary,
            text: colors.primary,
            textInversion: colors.white,
            buttons: buttonViews.sea,
            inputs: inputViews.sea,
        },
    },
};
