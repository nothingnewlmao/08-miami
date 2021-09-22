import React, { FC } from 'react';
import * as Styled from './styled';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { ILeadersProps } from './types';

const fakeElements: ILeadersProps[] = [
    {
        id: 1,
        name: 'Алла',
        points: 10,
    },
    {
        id: 2,
        name: 'Боря',
        points: 5,
    },
    {
        id: 3,
        name: 'Сева',
        points: 15,
    },
    {
        id: 4,
        name: 'Степа',
        points: 20,
    },
    {
        id: 5,
        name: 'Саня',
        points: 3,
    },
];

export const Leaderboard: FC = () => (
    <Styled.Wrapper>
        <Styled.Title>LeaderBoard</Styled.Title>
        <Styled.Table>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.Table>
    </Styled.Wrapper>
);
