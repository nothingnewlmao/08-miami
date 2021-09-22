import React, { FC } from 'react';
import * as Styled from './styled';
import { ITableBodyProps } from './types';

export const TableBody: FC<ITableBodyProps> = ({ elements }) => (
    <tbody>
        {elements.map(el => (
            <Styled.BodyTr key={el.id}>
                <Styled.BodyTd>{el.id}</Styled.BodyTd>
                <Styled.BodyTd>{el.name}</Styled.BodyTd>
                <Styled.BodyTd>{el.points}</Styled.BodyTd>
            </Styled.BodyTr>
        ))}
    </tbody>
);
