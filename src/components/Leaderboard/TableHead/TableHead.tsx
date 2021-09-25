import React, { FC } from 'react';
import * as Styled from './styled';

const headElements = ['Позиция', 'Имя', 'Очки'];

export const TableHead: FC = () => (
    <thead>
        <Styled.HeadTr>
            {headElements.map(el => (
                <Styled.HeadTh>{el}</Styled.HeadTh>
            ))}
        </Styled.HeadTr>
    </thead>
);
