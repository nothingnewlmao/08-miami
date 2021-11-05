import React, { FC } from 'react';
import { FormikValues } from 'formik';

import * as Styled from 'components/UserInfoTable/styled';

import { UIForm } from 'ui/components/Form';

import validationSchema from './validationSchema';
import { fields, initialValues } from './fields';

interface IChangeUserPasswordTableProps {
    submit: (values: FormikValues) => void;
}

export const ChangeUserPasswordTable: FC<IChangeUserPasswordTableProps> = ({
    submit,
}) => (
    <Styled.Container>
        <UIForm
            validationSchema={validationSchema}
            initialValues={initialValues}
            handleSubmit={submit}
            title="Смена пароля"
            fields={fields}
            buttonLabel="Сменить пароль"
        />
    </Styled.Container>
);
