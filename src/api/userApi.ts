/* eslint-disable class-methods-use-this */
import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance, { axiosApiInstance } from 'api/axios';

enum UserUrls {
    ChangePassword = 'user/password',
    ChangeInfo = 'user/profile',
    GetUser = 'user/',
    GetUserTheme = 'user-theme/',
    ChangeTheme = 'change-theme/',
}

class UserApi {
    changePassword(data: TObjectLiteral) {
        axiosInstance.put(UserUrls.ChangePassword, JSON.stringify(data));
    }

    changeInfo(data: TObjectLiteral) {
        axiosInstance.put(UserUrls.ChangeInfo, JSON.stringify(data));
    }

    getUser(id: number) {
        axiosInstance.get(`${UserUrls.GetUser}${id}`);
    }

    getUserTheme() {
        axiosApiInstance.get(`${UserUrls.GetUserTheme}`);
    }

    changeTheme = (data: string) => axiosApiInstance.post(UserUrls.ChangeTheme, data);
}

export const userApi = new UserApi();
