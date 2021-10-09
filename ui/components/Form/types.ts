import { FormHTMLAttributes } from 'react';
import * as Yup from 'yup';

export interface IStyledForm extends IFormData, FormHTMLAttributes<HTMLElement> {}

interface IValues {
    firstName: string;
    lastName: string;
}

interface IFormData {
    initialValues: IValues,
    schema: Record<string, Yup.SchemaOf<string | object | boolean>>,
    onSuccessfulSubmit: (data: Record<string, string>) => void;
}
