import * as Yup from 'yup';
import { FormWithRouter } from 'uicomponents/Form';
import React from 'react';
import { signUp } from 'api/axios';
import { FormikValues } from 'formik';
import { RouteComponentProps } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Name is required'),
    second_name: Yup.string().required('Surname is required'),
    login: Yup.string().required('Login is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
    phone: Yup.string().required('Phone is required'),
});

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
