import React, { FormHTMLAttributes } from 'react';

export type TStyledForm = FormHTMLAttributes<HTMLElement> & {
    handleSubmit?: (event: React.SyntheticEvent) => void
};
