import IDataStatus from 'types/IDataStatus';

interface IAuthStatus extends IDataStatus {
    isLoggedIn: boolean;
    oAuthCode?: null;
}

type TAuthStatus = IAuthStatus;

export default TAuthStatus;
