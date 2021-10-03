import { IUser } from 'pages/UserPage/UserPage';
import React, { FC } from 'react';
import { BaseButton, Input } from 'ui/components';
import { UserLabels } from './dictionary';
import * as Styled from './styled';

interface IChangeUserInfoTableProps {
    user: IUser;
    saveChanges: (user: IUser) => void;
}

export const ChangeUserInfoTable: FC<IChangeUserInfoTableProps> = ({
    user,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    saveChanges: _saveChanges,
}) => {
    const userEntries = Object.entries(user).map(([key, value]) => [
        // @ts-ignore
        UserLabels[key],
        value,
    ]);

    const formRef = React.createRef<HTMLFormElement>();

    return (
        <Styled.Container>
            <form ref={formRef}>
                <Styled.TableWrapper>
                    {userEntries.map(([key, value]) => (
                        <Styled.TableRow>
                            <td>{key}</td>
                            <td>
                                <Input label="key" value={value} />
                            </td>
                        </Styled.TableRow>
                    ))}
                </Styled.TableWrapper>

                <BaseButton view="primaryFlat" type="submit">
                    Сохранить данные
                </BaseButton>
            </form>
        </Styled.Container>
    );
};
