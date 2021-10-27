import IDataStatus from 'types/IDataStatus';

interface IAuthStatus extends IDataStatus {
    isLoggedIn: boolean;
}

type TAuthStatus = IAuthStatus;

export default TAuthStatus;
