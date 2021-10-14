import styled from 'styled-components';

import { colors } from 'ui/colors';
import { BaseButton } from 'ui/components';

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    font-size: 75px;
    font-weight: bold;
    flex-direction: column;
    background: ${colors.lightPrimary};
`;

export const GamePanel = styled.div`
    width: 100%;
    height: 60px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 30px;
`;

export const BackButton = styled(BaseButton)`
    background-color: ${colors.danger};

    & a {
        text-decoration: none;
        color: ${colors.white};
    }
`;

export const Timer = styled.div`
    font-size: 30px;
    color: ${colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${colors.white};

    border-radius: 25px;
    padding: 5px 15px;
    min-width: 85px;
`;
