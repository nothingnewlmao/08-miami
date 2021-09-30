import React, { FC } from 'react';
import { StyledTr } from 'uicomponents/Table/TableElements/TableElements';
import * as Styled from './styled';

const headElements = ['Позиция', 'Имя', 'Очки'];

export const TableHead: FC = () => (
    <thead>
        <StyledTr>
            {headElements.map(el => (
                <Styled.HeadTh>{el}</Styled.HeadTh>
            ))}
        </StyledTr>
    </thead>
);
