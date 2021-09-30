import React, {
    FC, useState, useCallback,
} from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import TObjectLiteral from 'types/ObjectLiteral';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import { Error } from 'uicomponents/Error/styled';
import axios from 'axios';

function useFormFields<T>(initialValues: T) {
    const [formFields, setFormFields] = useState<T>(initialValues);
    const createChangeHandler = (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormFields((prev: T) => ({ ...prev, [key]: value }));
    };
    return { formFields, createChangeHandler };
}

const SignUp: FC<RouteComponentProps> = ({ history }) => {
    const [errorMsg, setErrorMsg] = useState('');

    const inputs: TObjectLiteral = {
        email: {
            label: 'Почта',
            value: '',
            type: 'email',
        },
        login: {
            label: 'Логин',
            value: '',
        },
        first_name: {
            label: 'Имя',
            value: '',
        },
        second_name: {
            label: 'Фамилия',
            value: '',
        },
        phone: {
            label: 'Телефон',
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
            .post('auth/signup', JSON.stringify(formFields))
            .then(() => {
                history.push('/');
            })
            .catch((err) => {
                const { error, reason } = err.response.data;

                setErrorMsg(`${error}: ${reason}`);
            });
    }, [formFields]);

    return (
        <Wrapper className="sign-up">
            <Form title="Регистрация" handleSubmit={handleSubmit}>
                {renderedInputs}
                {errorMsg ? <Error>{errorMsg}</Error> : ''}
                <div>
                    <Button type="submit">Регистрация</Button>
                </div>
                <div>
                    <Button view="primaryFlat">
                        <Link to="/">Уже есть аккаунт</Link>
                    </Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export const SignUpWithRouter = withRouter(SignUp);
