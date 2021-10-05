import { createGlobalStyle } from 'styled-components';
import { ITheme } from './themes';

export const GlobalStyles = createGlobalStyle<ITheme>`
html, #root, .app, body {
  height: 100%;
}

body {
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.body};
    margin: 0;
    font-family: 'Roboto', sans-serif;
    
}
`;
