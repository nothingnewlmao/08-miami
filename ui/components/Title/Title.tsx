import styled from 'styled-components';
import { ITheme } from 'ui/themes';

export const Title = styled.h1<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;
