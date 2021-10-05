import React, { FC, useCallback, useState } from 'react';
import TObjectLiteral from 'types/ObjectLiteral';
import { Button, Input } from 'ui/components';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import { Form } from 'uicomponents/Form';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useFormFields } from 'utils/createFormFields';
import axios from 'axios';

const SignIn: FC<RouteComponentProps> = ({ history }) => {
    const [errorMsg, setErrorMsg] = useState('');

    const inputs: TObjectLiteral = {
        login: {
            label: 'Логин',
            value: '',
        },
        password: {
            label: 'Пароль',
            value: '',
            type: 'password',
        },
    };

    const inputsForSend = Object.fromEntries(
        Object.entries(inputs).map(([key, { value }]) => [key, value]),
    );

    const { formFields, createChangeHandler } = useFormFields(inputsForSend);

    const renderedInputs = Object.entries(inputs).map(([key, v]) => {
        const { label, type } = v;
        const { val } = formFields[key];
        return (
            <Input
                key={key}
                label={label}
                value={val}
                name={key}
                type={type}
                onChange={createChangeHandler(key)}
            />
        );
    });

    const handleSubmit = useCallback(() => {
        axios
            .post('auth/signin', JSON.stringify(formFields))
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                const { error, reason } = err.response.data;

                setErrorMsg(`${error}: ${reason}`);
            });
    }, [formFields]);

    return (
        <Wrapper>
            <Form
                title="Вход"
                handleSubmit={handleSubmit}
                error={errorMsg}
            >
                {renderedInputs}
                <div>
                    <Button type="submit">Вход</Button>
                </div>
                <div>
                    <Button view="primaryFlat">
                        <Link to="/sign-up">Нет аккаунта?</Link>
                    </Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export const SignInWithRouter = withRouter(SignIn);
