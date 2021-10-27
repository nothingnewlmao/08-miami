import styled from 'styled-components';

import { ITheme } from 'ui/themes';

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
