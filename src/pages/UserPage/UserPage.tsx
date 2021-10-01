import React, { FC } from 'react';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import { BackButton } from 'ui/components/BackButton';
import { BaseButton } from 'ui/components';
import { Link } from 'react-router-dom';
import { Title } from 'ui/components/Title';

interface IUser {
    id: string;
    name: string;
    record: number;
}

export const UserPage: FC = () => {
    const user: IUser = {
        id: 'user_id_1',
        name: 'Тот самый пользователь',
        record: 100500,
    };

    return (
        <Wrapper className="user-page">
            <Title>Здравствуй, {user.name}</Title>
            <BaseButton size="s">Выйти</BaseButton>
            <BackButton size="l">
                <Link to="/"> Домой </Link>
            </BackButton>
        </Wrapper>
    );
};
