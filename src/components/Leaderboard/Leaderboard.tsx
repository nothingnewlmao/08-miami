import React, { FC } from 'react';
import * as Styled from './styled';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { fakeElements } from './fakeData';

export const Leaderboard: FC = () => (
    <Styled.Wrapper>
        <Styled.Title>LeaderBoard</Styled.Title>
        <Styled.Table>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.Table>
    </Styled.Wrapper>
);
