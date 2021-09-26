import styled from 'styled-components';
import { ITheme } from '../../../ui/themes';
import { Button } from '../../../ui/components/Button';

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
    width: 700px;
    color: ${({ theme }) => theme.colors.textInversion};
    border-spacing: 0 5px;
`;

export const NewPostButton = styled(Button)<ITheme>`
    color: ${({ theme }) => theme.colors.textInversion};
`;
