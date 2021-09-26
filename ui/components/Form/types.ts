import { FormHTMLAttributes } from 'react';

export type TStyledForm = FormHTMLAttributes<HTMLElement> & {
    handleSubmit?: () => void
};
