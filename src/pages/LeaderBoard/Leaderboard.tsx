import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { teamLeaderboard } from 'api/leaderboardApi';
import { AxiosError, AxiosResponse } from 'axios';

import { IDataProps } from 'pages/LeaderBoard/types';

import { TableHead } from 'components/Leaderboard/TableHead/TableHead';
import { TableBody } from 'components/Leaderboard/TableBody/TableBody';

import { Title } from 'ui/components/Title';
import { BaseButton } from 'ui/components';

import { Wrapper } from 'uicomponents/Wrapper/styled';

import * as Styled from './styled';

export const Leaderboard: FC = () => {
    const [elements, setElements] = React.useState(null);
    React.useEffect(() => {
        teamLeaderboard()
            .then((response:AxiosResponse<any>) => {
                const newData = response.data.map(
                    (data:IDataProps) => ({
                        ...data.data,
                    }),
                );
                setElements(newData);
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    console.log('err');
                }
            });
    }, []);
    
    return (
        <Wrapper>
            <Title>LeaderBoard</Title>
            <Styled.LeaderTable>
                <TableHead />
                {elements ? <TableBody elements={elements} /> : null}
            </Styled.LeaderTable>
            <BaseButton size="s" view="primaryFlat">
                <Link to="/">Домой</Link>
            </BaseButton>
        </Wrapper>
    );
};
