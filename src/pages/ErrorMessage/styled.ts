import styled from 'styled-components';
import { colors } from 'ui/colors';

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    font-size: 75px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background: ${colors.lightPrimary};
`;
