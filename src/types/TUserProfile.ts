import IDataStatus from 'types/IDataStatus';
import { IUser } from 'types/IUser';

import TNullable from './TNullable';

interface IUserProfile extends IDataStatus {
    userInfo: TNullable<IUser>;
}

type TUserProfile = IUserProfile;

export default TUserProfile;
