import styled from 'styled-components';
import { colors } from 'ui/colors';
import { Wrapper } from 'ui/components/Wrapper/styled';

export const Container = styled(Wrapper)`
    width: 100%;
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
    width: 400px;
    margin-bottom: 100px;

    & > :last-child {
        border-bottom: 0;
    }
`;

export const TableRow = styled.tr`
    border-bottom: 1pt solid ${colors.lightGray};
    font-size: 14px;
    height: 40px;

    & > :nth-child(1) {
        text-align: left;
    }

    & > :nth-child(2) {
        text-align: right;
    }
`;
