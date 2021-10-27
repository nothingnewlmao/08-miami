import { FormikConfig, FormikValues } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
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
    handleSubmit: (
        values: FormikValues,
        history: RouteComponentProps['history'],
    ) => void;
    errorText?: TNullable<string>;
    validationSchema?: TObjectLiteral;
    buttonLabel?: string;
}

type TWithoutSubmit = Omit<FormikConfig<any>, 'onSubmit'>;
