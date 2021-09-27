import styled from 'styled-components';
import { colors } from 'ui/colors';

export const HeadTr = styled.tr`
    background: ${colors.black};
`;

export const HeadTh = styled.th`
    width: 33%;
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
