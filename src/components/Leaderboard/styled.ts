import styled from 'styled-components';
import { ITheme } from '../../../ui/themes';
import { Button } from '../../../ui/components/Button';
import { colors } from '../../../ui/colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.h2<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Table = styled.table<ITheme>`
    border-spacing: 0 10px;
    width: 700px;
    color: ${({ theme }) => theme.colors.textInversion};
`;

export const BackButton = styled(Button)`
    background-color: ${colors.danger};

    & a {
        text-decoration: none;
        color: ${colors.white};
    }
`;
