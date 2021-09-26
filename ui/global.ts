import { createGlobalStyle } from 'styled-components';
import { colors } from 'ui/colors';
import { ITheme } from './themes';

export const GlobalStyles = createGlobalStyle<ITheme>`
  body {
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.body};
    margin: 0;
    font-family: 'Roboto', sans-serif;
    
    html, #root, .app, body {
        height: 100%;
    }
      
      .-error {
          color: ${colors.danger};
      }
  }
`;
