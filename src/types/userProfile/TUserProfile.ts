import IDataStatus from 'types/IDataStatus';
import TNullable from 'types/TNullable';
import TObjectLiteral from 'types/TObjectLiteral';

interface IUserProfile extends IDataStatus {
    data: TNullable<TObjectLiteral>;
}

type TUserProfile = IUserProfile;

export default TUserProfile;
