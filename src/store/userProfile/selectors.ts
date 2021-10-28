import { TRootState } from 'store';
import { TUserInfo } from 'types/TUserInfo';

const userStateSelector = (state: TRootState) => state?.user;

export const selectCurrentUser = (state: TRootState) => userStateSelector(state)?.userInfo;

export const selectUserProfileInfo = (state: TRootState): TUserInfo | null => {
    const user = selectCurrentUser(state);

    if (user !== null && typeof user !== 'undefined') {
        const {
            avatar, id, login, ...rest
        } = user;

        return rest;
    }

    return null;
};
