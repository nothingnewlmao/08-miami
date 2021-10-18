import TNullable from 'types/TNullable';

interface IDataStatus {
    data?: TNullable<any>;
    pending: boolean;
    error: TNullable<string>;
}

export default IDataStatus;
