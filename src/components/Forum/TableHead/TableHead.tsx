import React, { FC } from 'react';

import * as Styled from './styled';

const headElements = ['Название', 'Автор', 'Дата публикации'];

export const TableHead: FC = () => (
    <thead>
        <Styled.HeadTr>
            {headElements.map((el, index) => (
                <Styled.HeadTh key={index.toString()}>{el}</Styled.HeadTh>
            ))}
        </Styled.HeadTr>
    </thead>
);
