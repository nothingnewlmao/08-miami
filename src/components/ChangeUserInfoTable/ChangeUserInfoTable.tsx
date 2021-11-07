import React, { FC } from 'react';
import { FormikValues } from 'formik';
import { TUserInfo } from 'types/TUserInfo';

import * as Styled from 'components/UserInfoTable/styled';

import { UIForm } from 'ui/components/Form';

import validationSchema from './validationSchema';
import { fields } from './fields';

interface IChangeUserInfoTableProps {
    initValues: TUserInfo;
    submit: (values: FormikValues) => void;
}

export const ChangeUserInfoTable: FC<IChangeUserInfoTableProps> = ({
    initValues,
    submit,
}) => (
    <Styled.Container>
        <UIForm
            initialValues={initValues}
            validationSchema={validationSchema}
            handleSubmit={submit}
            title="Смена данные"
            fields={fields}
            buttonLabel="Сменить данные"
        />
    </Styled.Container>
);
