import React, { useCallback } from 'react';
import { FormikValues } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from 'store';

import ActionTypes from 'store/auth/actionTypes';

import { BaseButton } from 'ui/components';

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
    const handleSubmit = (values: FormikValues) => {
        dispatch({ type: ActionTypes.SignIn, payload: values });
    };

    const handleOAuth = useCallback(() => {
        dispatch({ type: ActionTypes.OauthSignIn });
    }, [dispatch]);

    return (
        <>
            <FormWithRouter
                validationSchema={validationSchema}
                handleSubmit={handleSubmit}
                title="Вход"
                fields={fields}
                initialValues={initialValues}
                errorText={errorText}
            />
            <BaseButton onClick={handleOAuth}>Войти через Yandex</BaseButton>
        </>
    );
};
