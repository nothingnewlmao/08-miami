import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setGameProps } from 'store/game/slice';

import { LVLs } from 'services/Game/lvls';

import * as Styled from './styled';

export const LoadingPage: FC = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setGameProps({
                lvlNum: 0,
                richedKeys: {},
                initPoint: LVLs[0].entryPointA,
            }),
        );

        const timer = setTimeout(() => history.push('/game'), 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.LoadingModal>
                <Styled.LoadingTitle>Loading...</Styled.LoadingTitle>
            </Styled.LoadingModal>
        </Styled.Wrapper>
    );
};
