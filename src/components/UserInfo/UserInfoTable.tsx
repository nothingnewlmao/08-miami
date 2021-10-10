import React, { FC } from 'react';

import { IUser } from 'pages/UserPage/UserPage';

import { BaseButton } from 'ui/components';

import { UserLabels } from './dictionary';
import * as Styled from './styled';

interface IUserInfoTableProps {
    user: IUser;
    changeInfo: () => void;
    changePassword: () => void;
    quitHandler: () => void;
}

export const UserInfoTable: FC<IUserInfoTableProps> = ({
    user,
    changeInfo,
    changePassword,
    quitHandler,
}) => {
    const userEntries = Object.entries(user).map(([key, value]) => [
        // @ts-ignore
        UserLabels[key],
        value,
    ]);

    return (
        <Styled.Container>
            <Styled.TableWrapper>
                {userEntries.map(([key, value]) => (
                    <Styled.TableRow>
                        <td>{key}</td>
                        <td>{value}</td>
                    </Styled.TableRow>
                ))}
            </Styled.TableWrapper>

            <BaseButton view="primaryFlat" onClick={changeInfo}>
                Изменить данные
            </BaseButton>
            <BaseButton view="primaryFlat" onClick={changePassword}>
                Изменить пароль
            </BaseButton>
            <BaseButton view="dangerFlat" onClick={quitHandler}>
                Выйти
            </BaseButton>
        </Styled.Container>
    );
};
