import styled from 'styled-components';
import { ITheme } from 'ui/themes';
import { Button } from 'uicomponents/Button';
import { colors } from 'ui/colors';
import { Table } from 'uicomponents/Table/Table';

export const Title = styled.h2<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const LeaderTable = styled(Table)`
    border-spacing: 0 10px;
`;

export const BackButton = styled(Button)`
    background-color: ${colors.danger};

    & a {
        text-decoration: none;
        color: ${colors.white};
    }
`;
