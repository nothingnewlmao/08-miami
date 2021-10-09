// @ts-nocheck

import * as Yup from 'yup';
import { withFormik } from 'formik';
import { InnerForm } from 'uicomponents/Form';
import React from 'react';

interface IFormValues {
    ['first_name']: string;
    ['last_name']: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

interface IMyFormProps {
    initialFirstName?: string;
    initialLastName?: string;
    initialLogin?: string;
    initialEmail?: string;
    initialPassword?: string;
    initialPhone?: string;
}

const SignUp = withFormik<IMyFormProps, IFormValues>({
    mapPropsToValues: (props) => ({
        first_name: props.initialFirstName || '',
        last_name: props.initialLastName || '',
        login: props.initialLogin || '',
        email: props.initialEmail || '',
        password: props.initialPassword || '',
        phone: props.initialPhone || '',
    }),

    validationSchema: Yup.object().shape({
        first_name: Yup.string()
            .required('Name is required'),
        last_name: Yup.string().required('Surname is required'),
        login: Yup.string().required('Login is required'),
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
        phone: Yup.string().required('Phone is required'),
    }),

    handleSubmit() {
        // console.log(props.first_name, props.last_name);
    },
})(InnerForm);

export const SignUpWithData = () => (
    <SignUp
        title="Регистрация"
        fields={[{ label: 'Имя', name: 'first_name' }, { label: 'Фамилия', name: 'last_name' },
            { label: 'Логин', name: 'login' },
            { label: 'Email', name: 'email' }, { label: 'Пароль', name: 'password' },
            { label: 'Телефон', name: 'phone' }]}
    />
);
