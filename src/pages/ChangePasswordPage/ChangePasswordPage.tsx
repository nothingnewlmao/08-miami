import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormikValues } from 'formik';

import ActionTypes from 'store/userProfile/actionTypes';

import { GoBackColumn } from 'components/GoBackColumn/GoBackColumn';
import { ChangeUserPasswordTable } from 'components/UserInfo/ChangeUserPasswordTable';

import * as Styled from './styled';

const ChangePasswordPage: FC<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch();

    const backToUserInfo = () => {
        history.push('/user');
    };

    const submit = (values: FormikValues) => {
        dispatch({ type: ActionTypes.ChangePassword, payload: values });
    };

    return (
        <Styled.CustomWrapper>
            <GoBackColumn clickHandler={backToUserInfo} />
            <ChangeUserPasswordTable submit={submit} />
        </Styled.CustomWrapper>
    );
};

export const ChangePasswordPageWithRouter = withRouter(ChangePasswordPage);
