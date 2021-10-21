import { IUser } from 'types/IUser';

export type TUserInfo = Omit<IUser, 'avatar' | 'id' | 'login'>;

export type TUserKeys = keyof TUserInfo;

export const UserLabels: { [key in TUserKeys]: string } = {
    first_name: 'Имя',
    second_name: 'Фамилия',
    email: 'Почта',
    phone: 'Телефонный номер',
    display_name: 'Отображаемое имя',
};
