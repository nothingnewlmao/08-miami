import { FormikConfig, FormikValues } from 'formik';
import { RouteComponentProps } from 'react-router-dom';

export interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
}

export interface IInnerFormProps extends TWithoutSubmit {
    title: string;
    fields: IFormInputProps[];
    handleSubmit: (values: FormikValues, history: RouteComponentProps['history']) => void;
}

type TWithoutSubmit = Omit<FormikConfig<any>, 'onSubmit'>;
