import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './styled';

interface ILoadingPageProps {
    promise?: Promise<any>;
}

const LoadingPageDefaultProps: Required<ILoadingPageProps> = {
    promise: new Promise<void>(res => {
        setTimeout(() => res(), 30000);
    }),
};

export const LoadingPage: FC<ILoadingPageProps> = ({
    promise = LoadingPageDefaultProps.promise,
}: ILoadingPageProps) => {
    const history = useHistory();

    promise
        .then(() => {
            history.push('/game');
        })
        .catch(() => {
            history.push('/error');
        });

    return (
        <Styled.Wrapper>
            <Styled.LoadingModal>
                <Styled.LoadingTitle>Loading...</Styled.LoadingTitle>
            </Styled.LoadingModal>
        </Styled.Wrapper>
    );
};

LoadingPage.defaultProps = LoadingPageDefaultProps;
