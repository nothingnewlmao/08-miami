import styled from 'styled-components';

import { colors } from '../../../ui/colors';
import { Button } from '../../../ui/components';

export const Wrapper = styled.div`
    height: 100%;
    background: radial-gradient(at bottom, white, ${colors.primary});
`;

export const Container = styled.div`
    padding-top: 220px;
    margin: 0 auto;
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.span`
    font-size: 46px;
    color: ${colors.white};
    margin-bottom: 100px;
`;

export const MenuButton = styled(Button)`
    width: 200px;
    color: ${colors.white};
    text-decoration: none;
    background-color: ${colors.primary};
    margin-bottom: 10px;

    & a {
        text-decoration: none;
        color: ${colors.white};
        font-size: 18px;
    }
`;
