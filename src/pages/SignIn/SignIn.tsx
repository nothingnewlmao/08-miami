import React from 'react';
import * as Yup from 'yup';
import { FormikValues } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';

import { FormWithRouter } from 'uicomponents/Form';

const validationSchema = Yup.object().shape({
    login: Yup.string().required('Введите логин'),
    password: Yup.string().required('Введите пароль'),
});

const initialValues = {
    login: '',
    password: '',
};

const fields = [
    {
        label: 'Логин',
        name: 'login',
    },
    {
        label: 'Пароль',
        name: 'password',
        type: 'password',
    },
];

export const SignInWithData = () => {
    const errorText = useSelector((state: TRootState) => state.user.error);

    const dispatch = useDispatch();
    const handleSubmit = (values: FormikValues) => {
        dispatch({ type: 'signIn', payload: values });
    };

    return (
        <FormWithRouter
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
            title="Вход"
            fields={fields}
            initialValues={initialValues}
            errorText={errorText}
        />
    );
};
