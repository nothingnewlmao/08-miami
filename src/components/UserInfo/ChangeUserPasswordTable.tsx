import React, { FC } from 'react';
import { FormikValues } from 'formik';

import validationSchema from 'pages/SignUp/validationSchema';

import { FormWithRouter } from 'ui/components/Form';

import * as Styled from './styled';

const initialValues = {
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: '',
};

const fields = [
    {
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль (ещё раз)',
        name: 'newPasswordAgain',
        type: 'password',
    },
];

interface IChangeUserPasswordTableProps {
    submit: (values: FormikValues) => void;
}

export const ChangeUserPasswordTable: FC<IChangeUserPasswordTableProps> = ({
    submit,
}) => (
    <Styled.Container>
        <FormWithRouter
            validationSchema={validationSchema}
            initialValues={initialValues}
            handleSubmit={submit}
            title="Смена пароля"
            fields={fields}
            buttonLabel="Сменить пароль"
        />
    </Styled.Container>
);
