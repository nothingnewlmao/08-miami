/* eslint-disable class-methods-use-this */
import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum UserUrls {
    ChangePassword = 'user/password',
    ChangeInfo = 'user/profile',
    GetUser = 'user/',
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
}

export const userApi = new UserApi();
