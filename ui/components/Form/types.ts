import { FormikConfig, FormikValues } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import TNullable from 'types/TNullable';

export interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
}

export interface IInnerFormProps extends TWithoutSubmit {
    title: string;
    fields: IFormInputProps[];
    handleSubmit: (
        values: FormikValues,
        history: RouteComponentProps['history'],
    ) => void;
    errorText?: TNullable<string>;
}

type TWithoutSubmit = Omit<FormikConfig<any>, 'onSubmit'>;
