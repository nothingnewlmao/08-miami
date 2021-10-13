import styled from 'styled-components';

import { colors } from 'ui/colors';
import { Table } from 'ui/components';

import {
    StyledTd,
    StyledTr,
} from 'uicomponents/Table/TableElements/TableElements';

export const CustomTable = styled(Table)`
    width: 600px;
`;

export const BodyTr = styled(StyledTr)`
    background: ${colors.primary};
`;

export const BodyTd = styled(StyledTd)`
    height: 50px;
`;
