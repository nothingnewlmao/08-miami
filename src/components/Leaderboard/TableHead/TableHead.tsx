import React, { FC } from 'react';
import * as Styled from './styled';
import { StyledTr } from '../../../../ui/components/Table/TableElements/TableElements';

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
