import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { fakeElements } from 'components/Forum/fakeData';
import { TableBody } from 'components/Forum/TableBody';
import { TableHead } from 'components/Forum/TableHead';
import { TextEditor } from 'components/Forum/TextEditor';

import { Title } from 'ui/components/Title';

import * as Styled from './styled';

export const Forum: FC = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <Styled.Wrapper>
            <Title>Форум</Title>

            {fakeElements.map(el => (
                <>
                    <Styled.Category>{el.title}</Styled.Category>
                    <Styled.TableForum>
                        <TableHead />
                        <TableBody elements={el.data} />
                    </Styled.TableForum>
                </>
            ))}
            {isOpen ? <TextEditor /> : null}
            <Styled.NewPostButton size="l" onClick={() => setOpen(!isOpen)}>
                Новый пост
            </Styled.NewPostButton>

            <Styled.ForumBackButton size="l">
                <Link to="/"> Домой </Link>
            </Styled.ForumBackButton>
        </Styled.Wrapper>
    );
};
