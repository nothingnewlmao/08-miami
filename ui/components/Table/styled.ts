import styled from 'styled-components';

import { ITheme } from 'ui/themes';

export const Table = styled.table<ITheme>`
    width: 700px;
    color: ${({ theme }) => theme.colors.textInversion};
`;
