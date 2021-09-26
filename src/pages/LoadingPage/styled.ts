import styled from 'styled-components';
import { colors } from '../../../ui/colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const LoadingModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 4px outset ${colors.lightPrimary};
    width: 350px;
    height: 80px;
`;

export const LoadingTitle = styled.span`
    font-size: 32px;
    color: ${colors.primary};
`;
