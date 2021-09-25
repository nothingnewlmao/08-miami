import styled from 'styled-components';
import { colors } from 'UI/colors';

export const BodyTr = styled.tr`
    background: ${colors.primary};
`;

export const BodyTd = styled.td`
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
