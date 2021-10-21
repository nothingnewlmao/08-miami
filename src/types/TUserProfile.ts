import IDataStatus from 'types/IDataStatus';
import { IUser } from 'types/IUser';

interface IUserProfile extends IDataStatus {
    userInfo: IUser | null;
}

type TUserProfile = IUserProfile;

export default TUserProfile;
