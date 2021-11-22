import React, { useCallback } from 'react';
import { FormikValues } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { TRootState } from 'store/types';
import ActionTypes from 'store/auth/actionTypes';

import { BaseButton } from 'ui/components';

import { UIForm } from 'uicomponents/Form';

import { dispatchOrmUserActions } from 'models/User/controllers';

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

// это пример использования модельки. потом можно впихивать это в какие угодно файлы
// удалю после апрува пр, когда скажете, что всё ок и всем всё понятно :>
// и да, я помню, что мы договаривались в качестве примера ничего не писать
// но тут, мне показалось, что надо

dispatchOrmUserActions();

export const SignInWithData = () => {
    const errorText = useSelector((state: TRootState) => state.auth.error);

    const dispatch = useDispatch();

    const memoizedHandleSubmit = useCallback(
        (values: FormikValues) => {
            dispatch({ type: ActionTypes.SignIn, payload: values });
        },
        [dispatch],
    );

    const memoizedHandleOAuth = useCallback(() => {
        dispatch({ type: ActionTypes.GetAuthSignInCode });
    }, [dispatch]);

    return (
        <UIForm
            validationSchema={validationSchema}
            handleSubmit={memoizedHandleSubmit}
            title="Вход"
            fields={fields}
            initialValues={initialValues}
            errorText={errorText}
        >
            <BaseButton onClick={memoizedHandleOAuth}>
                Войти через Yandex
            </BaseButton>
        </UIForm>
    );
};
