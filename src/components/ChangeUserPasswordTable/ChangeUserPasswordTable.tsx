import React, { FC } from 'react';
import { FormikValues } from 'formik';

import { FormWithRouter } from 'ui/components/Form';

import * as Styled from '../UserInfoTable/styled';

import validationSchema from './validationSchema';
import { fields, initialValues } from './fields';

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
