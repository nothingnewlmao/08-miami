import React, { FC } from 'react';
import { fakeElements } from '../../components/Forum/fakeData';
import { TableBody } from '../../components/Forum/TableBody';
import { TableHead } from '../../components/Forum/TableHead';
import * as Styled from './styled';
import { TextEditor } from '../../components/Forum/TextEditor';

export const Forum: FC = () => (
    <Styled.Wrapper>
        <Styled.Title>Форум</Styled.Title>
        <Styled.Table>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.Table>
        <TextEditor />
        <Styled.NewPostButton size="l">Новый пост</Styled.NewPostButton>
    </Styled.Wrapper>
);
