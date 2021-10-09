import React from 'react';
import { FormikProps } from 'formik';
import { Button, Input } from 'ui/components';
import * as Styled from './styled';

interface IFormValues {
    ['first_name']: string;
    ['last_name']: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

interface ITest {
    label: string;
    name: keyof IFormValues;
}

interface IOtherProps {
    title?: string;
    fields?: ITest[];
}

export const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        title,
        fields,
    } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Styled.DynamicFormBox>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.FieldsWrapper>
                        {fields!.map((el) => (
                            <Input
                                key={el.name}
                                label={el.label}
                                name={el.name}
                                value={values[el.name]}
                                onChange={handleChange}
                                errorText={errors[el.name] && touched[el.name]
                                    ? errors[el.name]
                                    : null}
                            />
                        ))}
                    </Styled.FieldsWrapper>
                    <Button type="submit">Присоединиться</Button>
                </Styled.DynamicFormBox>
            </form>
        </div>
    );
};
