import React, { FC } from 'react';

import { StyledTr } from 'ui/components';

import * as Styled from './styled';
import { ITableBodyProps } from './types';

export const TableBody: FC<ITableBodyProps> = ({ elements }) => (
    <tbody>
        {elements.map(el => (
            <StyledTr key={el.id}>
                <Styled.BodyTd>{el.title}</Styled.BodyTd>
                <Styled.BodyTd>{el.name}</Styled.BodyTd>
                <Styled.BodyTd>{el.date}</Styled.BodyTd>
            </StyledTr>
        ))}
    </tbody>
);
