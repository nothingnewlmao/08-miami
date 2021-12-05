import { UserTheme } from 'initSequelize';

import { IUserTheme } from './model';

export async function createTheme(theme: string, UserId: string) {
    return UserTheme.create({ theme, UserId });
}

export async function updateUserThemeById(id: number, data: IUserTheme) {
    return UserTheme.update(data, { where: { id } });
}

export async function findTheme(UserId: number) {
    return UserTheme.findOne({ where: { UserId } });
}
