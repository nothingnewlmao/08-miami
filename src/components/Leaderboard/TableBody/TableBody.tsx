import React, { FC } from 'react';

import * as Styled from './styled';
import { ITableBodyProps } from './types';

export const TableBody: FC<ITableBodyProps> = ({ elements }) => {
    const sorted = elements.sort((a, b) => b.points - a.points).slice(0, 5);
    return (
        <tbody>
            {sorted.map((el, index) => (
                <Styled.BodyTr key={el.id}>
                    <Styled.BodyTd>{index + 1}</Styled.BodyTd>
                    <Styled.BodyTd>{el.name}</Styled.BodyTd>
                    <Styled.BodyTd>{el.points}</Styled.BodyTd>
                </Styled.BodyTr>
            ))}
        </tbody>
    );
};
