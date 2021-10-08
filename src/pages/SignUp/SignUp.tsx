import React, { FC } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button, Input } from 'ui/components';
import * as Styled from './styled';

const initialValues = {
    firstName: 'kdfgkdf',
    lastName: 'gello',
};

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const SignUp: FC = () => (
    <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={() => {
            console.log(1);
        }}
        validationSchema={SignupSchema}
    >
        {({ errors, touched, values, handleChange }) => (
            <Form>
                <Styled.DynamicFormBox>
                    <Styled.FieldsWrapper>
                        <Input
                            label="Имя"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            errorText={
                                errors.firstName && touched.firstName
                                    ? errors.firstName
                                    : null
                            }
                        />
                        <Input
                            label="Фамилия"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            errorText={
                                errors.lastName && touched.lastName
                                    ? errors.lastName
                                    : null
                            }
                        />
                    </Styled.FieldsWrapper>
                    <Button type="submit">Присоединиться</Button>
                </Styled.DynamicFormBox>
            </Form>
        )}
    </Formik>
);
