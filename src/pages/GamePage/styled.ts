import styled from 'styled-components';

import { colors } from 'ui/colors';

import { Button } from 'uicomponents/Button';

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
    padding-left: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const BackButton = styled(Button)`
    background-color: ${colors.danger};

    & a {
        text-decoration: none;
        color: ${colors.white};
    }
`;
