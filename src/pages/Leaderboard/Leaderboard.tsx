import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { fakeElements } from 'pages/LeaderBoard/fakeData';

import { TableHead } from 'components/Leaderboard/TableHead/TableHead';
import { TableBody } from 'components/Leaderboard/TableBody/TableBody';

import { BackButton } from 'ui/components/BackButton';
import { Title } from 'ui/components/Title';

import { Wrapper } from 'uicomponents/Wrapper/styled';

import * as Styled from './styledComponents';

export const Leaderboard: FC = () => (
    <Wrapper>
        <Title>LeaderBoard</Title>
        <Styled.LeaderTable>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.LeaderTable>
        <BackButton size="l">
            <Link to="/">Домой</Link>
        </BackButton>
    </Wrapper>
);
