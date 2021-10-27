import { FormikConfig, FormikValues } from 'formik';
import TNullable from 'types/TNullable';
import TObjectLiteral from 'types/TObjectLiteral';

export interface IFormInputProps {
    label: string;
    name: string;
    type?: string;
}

export interface IUIFormProps extends TWithoutSubmit {
    title: string;
    fields: IFormInputProps[];
    handleSubmit: (values: FormikValues) => void;
    errorText?: TNullable<string>;
    validationSchema?: TObjectLiteral;
}

type TWithoutSubmit = Omit<FormikConfig<any>, 'onSubmit'>;
