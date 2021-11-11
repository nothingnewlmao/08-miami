import TNullable from 'types/TNullable';

interface IDataStatus {
    data?: TNullable<any>;
    pending: boolean;
    error: TNullable<string>;
    loaded?: boolean;
    failed?: boolean;
}

export default IDataStatus;
