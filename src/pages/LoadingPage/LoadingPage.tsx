import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styled';

export const LoadingPage: FC = () => {
    const history = useHistory();

    setTimeout(() => history.push('/game'), 2500);

    return (
        <Styled.Wrapper>
            <Styled.LoadingModal>
                <Styled.LoadingTitle>Loading...</Styled.LoadingTitle>
            </Styled.LoadingModal>
        </Styled.Wrapper>
    );
};
