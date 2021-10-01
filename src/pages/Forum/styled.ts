import styled from 'styled-components';

import { ITheme } from 'ui/themes';
import { BaseButton } from 'ui/components';
import { BackButton } from 'ui/components/BackButton';

import { Table } from 'uicomponents/Table/Table';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

export const Category = styled.h3<ITheme>`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TableForum = styled(Table)`
    border-spacing: 0 5px;
`;

export const NewPostButton = styled(BaseButton)<ITheme>`
    color: ${({ theme }) => theme.colors.textInversion};
`;

export const ForumBackButton = styled(BackButton)<ITheme>`
    margin-top: 5px;
`;
