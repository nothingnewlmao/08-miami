import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TableHead } from '../../components/Leaderboard/TableHead/TableHead';
import { TableBody } from '../../components/Leaderboard/TableBody/TableBody';
import { fakeElements } from '../../components/Leaderboard/fakeData';
import * as Styled from './styled';

export const Leaderboard: FC = () => (
    <Styled.Wrapper>
        <Styled.Title>LeaderBoard</Styled.Title>
        <Styled.LeaderTable>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.LeaderTable>
        <Styled.BackButton size="l">
            <Link to="/">Домой</Link>
        </Styled.BackButton>
    </Styled.Wrapper>
);
