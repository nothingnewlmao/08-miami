import styled from 'styled-components';
import { StyledTd, StyledTr } from '../../../../ui/components/Table/TableElements/TableElements';
import { colors } from '../../../../ui/colors';

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
