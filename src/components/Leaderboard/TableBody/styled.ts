import styled from 'styled-components';

import { colors } from 'ui/colors';

import {
    StyledTd,
    StyledTr,
} from 'uicomponents/Table/TableElements/TableElements';

export const BodyTr = styled(StyledTr)`
    background: ${colors.primary};
`;

export const BodyTd = styled(StyledTd)`
    width: 33%;

    &:first-child {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    &:last-child {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`;
