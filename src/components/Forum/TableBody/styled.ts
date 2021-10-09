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
    height: 50px;
`;
