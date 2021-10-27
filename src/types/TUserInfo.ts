import { IUser } from 'types/IUser';

export type TUserInfo = Omit<IUser, 'avatar' | 'id' | 'login'>;

export type TUserKeys = keyof TUserInfo;
