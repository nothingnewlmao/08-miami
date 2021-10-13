import styled from 'styled-components';

import { ITheme } from 'ui/themes';

export const Table = styled.table<ITheme>`
    border-collapse: collapse;
    width: 400px;
    margin-bottom: 100px;

    & > :last-child {
        border-bottom: 0;
    }
`;
