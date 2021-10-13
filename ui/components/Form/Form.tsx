import React from 'react';
import { Formik, Form } from 'formik';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button, Input, StyledError } from 'ui/components';

import { IInnerFormProps } from 'uicomponents/Form/types';

import * as Styled from './styled';

const InnerForm: React.FC<IInnerFormProps & RouteComponentProps> = ({
    fields,
    title,
    initialValues,
    validationSchema,
    history,
    handleSubmit,
    errorText,
}) => (
    <Formik
        onSubmit={(values) => {
            handleSubmit(values, history);
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
    >
        {({
            values, errors, touched, handleChange,
        }) => (
            <Form>
                <Styled.DynamicFormBox>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.FieldsWrapper>
                        {fields!.map((el) => (
                            <Input
                                key={el.name}
                                label={el.label}
                                name={el.name}
                                value={values[el.name]}
                                type={el.type || 'text'}
                                onChange={handleChange}
                                errorText={
                                    errors[el.name] && touched[el.name]
                                        ? errors[el.name]
                                        : null
                                }
                            />
                        ))}
                    </Styled.FieldsWrapper>
                    <Button type="submit">Присоединиться</Button>
                    <StyledError>{errorText}</StyledError>
                </Styled.DynamicFormBox>
            </Form>
        )}
    </Formik>
);

export const FormWithRouter = withRouter(InnerForm);
