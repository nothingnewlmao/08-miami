import styled from 'styled-components';

import { ITheme } from 'ui/themes';
import { colors } from 'ui/colors';

import { Button } from 'uicomponents/Button';
import { Table } from 'uicomponents/Table/Table';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

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
