import React, { FC } from 'react';
import * as Styled from './styled';

export const GoBackColumn: FC<{ clickHandler: () => void }> = ({
    clickHandler,
}) => (
    <Styled.CustomWrapper onClick={clickHandler}>
        <span className="material-icons center-self-align"> &#xE2EA; </span>
    </Styled.CustomWrapper>
);
