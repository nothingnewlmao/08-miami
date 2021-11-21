import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentUser } from 'store/userProfile/selectors';
import { isServer } from 'store/rootStore';
import ActionTypes from 'store/leaderboard/actionTypes';
import { leaderboardStateSelector } from 'store/leaderboard/selectors';

import { ILeadersProps } from 'pages/LeaderBoard/types';

import { GameField } from 'components/GameField/GameField';

import { backgroundMusic } from 'services/BackgroundMusic/BackgroundMusic';

import { BackButton, BaseButton } from 'ui/components';

import * as Styled from './styled';

export const GamePage: FC = () => {
    const panelHeight = 60;

    const endTimeSeconds = 10;

    const endTime = Date.now() + 1000 * endTimeSeconds;

    const [time, setTime] = useState(Math.floor((endTime - Date.now()) / 1000));

    const [score, setScore] = useState(0);

    const user = useSelector(selectCurrentUser);
    const leaderboard = useSelector(leaderboardStateSelector);

    const dispatch = useDispatch();

    const history = useHistory();

    if (isServer) {
        history.push('/');
    }

    const fieldHeight = isServer ? 0 : window.innerHeight - panelHeight;
    const fieldWidth = isServer ? 0 : window.innerWidth;

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(Math.floor((endTime - Date.now()) / 1000));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        backgroundMusic.play();

        return () => backgroundMusic.stop();
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
        const leaderInit = {} as ILeadersProps;
        const currentUser = Array.isArray(leaderboard.leaderboardInfo)
            ? leaderboard.leaderboardInfo.filter((el) => user!.login === el!.name)
            : [leaderInit];

        if (score > currentUser[0]!.points) {
            dispatch({ type: ActionTypes.ChangeLeaderboard, payload: requestData });
        }
    }, [score, dispatch]);

    return (
        <Styled.Wrapper>
            <GameField
                fieldHeight={fieldHeight}
                fieldWidth={fieldWidth}
                endTime={endTime}
                setScore={setScore}
            />
            <Styled.GamePanel>
                <BackButton size="s">
                    <Link to="/">На главную страницу</Link>
                </BackButton>
                <BaseButton onClick={() => backgroundMusic.toggleMusic()}>
                    Toggle music
                </BaseButton>
                <Styled.Timer>{time}</Styled.Timer>
                <Styled.Timer>{score} points</Styled.Timer>
            </Styled.GamePanel>
        </Styled.Wrapper>
    );
};
