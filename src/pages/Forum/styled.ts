import styled from 'styled-components';
import { ITheme } from '../../../ui/themes';
import { Button } from '../../../ui/components/Button';
import { Table } from '../../../ui/components/Table/Table';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.h1<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Category = styled.h3<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TableForum = styled(Table)`
    border-spacing: 0 5px;
`;

export const NewPostButton = styled(Button)<ITheme>`
    color: ${({ theme }) => theme.colors.textInversion};
`;
