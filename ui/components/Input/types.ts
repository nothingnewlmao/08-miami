import React from 'react';
import { FormikErrors } from 'formik';

interface IStyledInput extends React.InputHTMLAttributes<HTMLElement> {
    label?: string;
    errorText?: null | FormikErrors<any> | string | string[] | FormikErrors<any>[];
}

export type TStyledInput = IStyledInput;
