import { IUser } from 'pages/UserPage/UserPage';

type TUserKeys = keyof IUser;

export const UserLabels: { [key in TUserKeys]: string } = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Почта',
    login: 'Логин',
    phone: 'Телефонный номер',
};
