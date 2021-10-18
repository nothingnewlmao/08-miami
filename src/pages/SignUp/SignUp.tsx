import React from 'react';
import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';

import ActionTypes from 'store/auth/actionTypes';

import { FormWithRouter } from 'uicomponents/Form';

import validationSchema from './validationSchema';

const initialValues = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    password: '',
    phone: '',
};

export const SignUpWithData = () => {
    const dispatch = useDispatch();
    const handleSubmit = (
        values: FormikValues,
    ) => {
        dispatch({ type: ActionTypes.SignUp, payload: values });
    };

    return (
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
};
