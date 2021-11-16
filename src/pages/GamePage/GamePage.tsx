import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { teamLeaderboard, addLeaderboard } from 'api/leaderboardApi';
import { AxiosResponse, AxiosError } from 'axios';

import { selectCurrentUser } from 'store/userProfile/selectors';
import { isServer } from 'store/rootStore';
import { gameStateSelector } from 'store/game/selectors';

import { GameField } from 'components/GameField/GameField';

import { backgroundMusic } from 'services/BackgroundMusic/BackgroundMusic';

import { BackButton, BaseButton } from 'ui/components';

import * as Styled from './styled';

export const GamePage: FC = () => {
    const [score, setScore] = useState(0);

    const [oldPoints, setOldPoints] = useState(0);

    const gameProps = useSelector(gameStateSelector);

    const user = useSelector(selectCurrentUser);

    const history = useHistory();

    if (isServer) {
        history.push('/');
    }

    useEffect(() => {
        backgroundMusic.play();

        return () => backgroundMusic.stop();
    }, []);

    useEffect(() => {
        teamLeaderboard()
            .then((response: AxiosResponse<any>) => {
                setOldPoints(response.data[0].data.points);
            })
            .catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    console.log('err');
                }
            });

        return () => {};
    }, []);

    useEffect(() => {
        const newData = {
            miami7: Date.now(),
            name: user ? user.login : null,
            points: score,
        };
        const requestData = {
            data: newData,
            ratingFieldName: 'miami7',
            teamName: 'miami7',
        };
        if (score > oldPoints) {
            addLeaderboard(requestData).catch((err: AxiosError) => {
                if (err.response?.status === 401) {
                    console.log('err');
                }
            });
        }

        return () => {};
    }, [score]);

    return (
        <Styled.Wrapper>
            <GameField
                richedKeys={gameProps.richedKeys}
                setScore={setScore}
                lvlNumber={gameProps.lvlNum}
                initPoint={gameProps.initPoint}
            />
            <Styled.GamePanel>
                <BackButton size="s">
                    <Link to="/">На главную страницу</Link>
                </BackButton>
                <BaseButton onClick={() => backgroundMusic.toggleMusic()}>
                    Toggle music
                </BaseButton>
                <Styled.Timer>{score} points</Styled.Timer>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
