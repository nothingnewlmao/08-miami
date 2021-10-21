import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { FormWithRouter } from 'ui/components/Form';

import * as Styled from './styled';
import { TUserInfo } from './dictionary';

const fields = [
    {
        label: 'Имя',
        name: 'first_name',
    },
    {
        label: 'Фамилия',
        name: 'second_name',
    },
    {
        label: 'Почта',
        name: 'email',
    },
    {
        label: 'Отображаемое имя',
        name: 'display_name',
    },
    {
        label: 'Телефонный номер',
        name: 'phone',
    },
];

interface IChangeUserInfoTableProps {
    initValues: TUserInfo;
    submit: (values: FormikValues) => void;
}

export const ChangeUserInfoTable: FC<IChangeUserInfoTableProps> = ({
    initValues,
    submit,
}) => (
    <Styled.Container>
        <FormWithRouter
            initialValues={initValues}
            handleSubmit={submit}
            title="Смена данные"
            fields={fields}
            buttonLabel="Сменить данные"
        />
    </Styled.Container>
);
