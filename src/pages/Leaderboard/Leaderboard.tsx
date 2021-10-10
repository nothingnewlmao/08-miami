import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { fakeElements } from 'pages/LeaderBoard/fakeData';

import { TableHead } from 'components/Leaderboard/TableHead/TableHead';
import { TableBody } from 'components/Leaderboard/TableBody/TableBody';

import { Title } from 'ui/components/Title';
import { BaseButton } from 'ui/components';

import { Wrapper } from 'uicomponents/Wrapper/styled';

import * as Styled from './styled';

export const Leaderboard: FC = () => (
    <Wrapper>
        <Title>LeaderBoard</Title>
        <Styled.LeaderTable>
            <TableHead />
            <TableBody elements={fakeElements} />
        </Styled.LeaderTable>
        <BaseButton size="s" view="primaryFlat">
            <Link to="/">Домой</Link>
        </BaseButton>
    </Wrapper>
);
