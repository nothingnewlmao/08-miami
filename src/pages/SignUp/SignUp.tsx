import React from 'react';
import { signUp } from 'api/authApi';
import { FormikValues } from 'formik';
import { RouteComponentProps } from 'react-router-dom';

import { FormWithRouter } from 'uicomponents/Form';

import validationSchema from './validationSchema';

const handleSubmit = (
    values: FormikValues,
    history: RouteComponentProps['history'],
) => {
    signUp(values)
        .then(() => {
            history.push('/');
        })
        .catch((err) => console.log(err));
};

const initialValues = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',
};

export const SignUpWithData = () => (
    <FormWithRouter
        validationSchema={validationSchema}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        title="Регистрация"
        fields={[
            { label: 'Имя', name: 'first_name' },
            { label: 'Фамилия', name: 'second_name' },
            { label: 'Логин', name: 'login' },
            { label: 'Email', name: 'email' },
            { label: 'Пароль', name: 'password', type: 'password' },
            { label: 'Телефон', name: 'phone' },
        ]}
    />
);
