import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { TableHead } from 'Components/TableHead/TableHead';
import { TableBody } from 'Components/TableBody/TableBody';
import { fakeElements } from './fakeData';

export const Leaderboard: FC = () => (
    <Styled.Wrapper>
        <Styled.Title>LeaderBoard</Styled.Title>
        <Styled.Table>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.Table>
        <Styled.BackButton size="l">
            <Link to="/">Домой</Link>
        </Styled.BackButton>
    </Styled.Wrapper>
);
