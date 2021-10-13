import styled from 'styled-components';

import { colors } from 'ui/colors';

export const StyledTr = styled.tr`
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

export const StyledTh = styled.th`
    background: ${colors.white};
`;

export const StyledTd = styled.td`
    height: 50px;
`;
