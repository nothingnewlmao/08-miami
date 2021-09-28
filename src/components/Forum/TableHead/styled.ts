import styled from 'styled-components';
import { colors } from 'ui/colors';
import {
    StyledTh,
    StyledTr,
} from 'uicomponents/Table/TableElements/TableElements';

export const HeadTr = styled(StyledTr)`
    background: ${colors.gray};
    border: 1px solid ${colors.primary};
`;

export const HeadTh = styled(StyledTh)`
    width: 33%;
    height: 50px;
`;
