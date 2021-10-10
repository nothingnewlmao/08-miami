import styled from 'styled-components';

import { StyledTh } from 'uicomponents/Table/TableElements/TableElements';

export const HeadTh = styled(StyledTh)`
    height: 50px;

    &:first-child {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    &:last-child {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
`;
