import styled from 'styled-components';
import { colors } from '../../../../ui/colors';
import { StyledTd, StyledTr } from '../../../../ui/components/Table/TableElements/TableElements';

export const BodyTr = styled(StyledTr)`
    background: ${colors.primary};
`;

export const BodyTd = styled(StyledTd)`
    height: 50px;
`;
