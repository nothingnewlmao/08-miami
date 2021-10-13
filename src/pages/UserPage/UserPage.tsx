import React, { FC, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { GoBackColumn } from 'components/GoBackColumn/GoBackColumn';
import { UserInfoTable } from 'components/UserInfo/UserInfoTable';
import { ChangeUserInfoTable } from 'components/UserInfo/ChangeUserInfoTable';
import { ChangeUserPasswordTable } from 'components/UserInfo/ChangeUserPasswordTable';

import * as Styled from './styled';

export interface IUser {
    firstName: string;
    lastName: string;
    login: string;
    email: string;
    phone: string;
}

type TActiveTableName = 'info' | 'changeInfo' | 'changePassword';

const UserPage: FC<RouteComponentProps> = ({ history }) => {
    const [activeTable, setActiveTable] = useState<TActiveTableName>('info');

    const user: IUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        login: 'JD',
        phone: '555-1234',
    };

    const backTo = () => {
        switch (activeTable) {
        case 'changeInfo':
        case 'changePassword':
            setActiveTable('info');
            break;
        case 'info':
            history.push('/');
            break;
        default:
            history.push('/');
        }
    };

    const tableDict: { [key: string]: JSX.Element } = {
        info: (
            <UserInfoTable
                user={user}
                changeInfo={() => setActiveTable('changeInfo')}
                changePassword={() => {
                    setActiveTable('changePassword');
                }}
                quitHandler={() => {}}
            >
                Hello
            </UserInfoTable>
        ),
        changeInfo: <ChangeUserInfoTable user={user} saveChanges={() => {}} />,
        changePassword: <ChangeUserPasswordTable saveChanges={() => {}} />,
    };

    return (
        <Styled.CustomWrapper>
            <GoBackColumn clickHandler={backTo} />
            {tableDict[activeTable]}
        </Styled.CustomWrapper>
    );
};

export const UserPageWithRouter = withRouter(UserPage);
