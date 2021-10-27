import React, { useCallback } from 'react';
import { FormikValues } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';

import ActionTypes from 'store/auth/actionTypes';

import { FormWithRouter } from 'uicomponents/Form';

import validationSchema from './validationSchema';

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
    const errorText = useSelector((state: TRootState) => state.auth.error);

    const dispatch = useDispatch();

    const memoizedHandleSubmit = useCallback((values: FormikValues) => {
        dispatch({ type: ActionTypes.SignIn, payload: values });
    }, []);

    return (
        <FormWithRouter
            validationSchema={validationSchema}
            handleSubmit={memoizedHandleSubmit}
            title="Вход"
            fields={fields}
            initialValues={initialValues}
            errorText={errorText}
        />
    );
};
