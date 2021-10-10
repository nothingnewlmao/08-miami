import React, { FC } from 'react';

import { BaseButton, Input } from 'ui/components';

import * as Styled from './styled';

interface INewPasswordOptions {
    password: string;
    passwordAgain: string;
}

interface IChangeUserPasswordTableProps {
    saveChanges: (options: INewPasswordOptions) => void;
}

export const ChangeUserPasswordTable: FC<IChangeUserPasswordTableProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    saveChanges: _saveChanges,
}) => (
    <Styled.Container>
        <form>
            <Styled.TableWrapper>
                <Styled.TableRow>
                    <td>Старый пароль</td>
                    <td>
                        <Input label="key" type="password" />
                    </td>
                </Styled.TableRow>
                <Styled.TableRow>
                    <td>Новый пароль</td>
                    <td>
                        <Input label="key" type="password" />
                    </td>
                </Styled.TableRow>
                <Styled.TableRow>
                    <td>Новый пароль (опять)</td>
                    <td>
                        <Input label="key" type="password" />
                    </td>
                </Styled.TableRow>
            </Styled.TableWrapper>

            <BaseButton view="primaryFlat" type="submit">
                Сохранить данные
            </BaseButton>
        </form>
    </Styled.Container>
);
