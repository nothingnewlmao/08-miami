import React, { FC, useState, useCallback, useMemo } from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Link, useHistory } from 'react-router-dom';
import TObjectLiteral from 'types/ObjectLiteral';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import axios from 'axios';

export const SignUp: FC = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const errorBlock = <div className="-error">{errorMsg}</div>;

    const useFormField = (initialValue: string = '') => {
        const [val, setVal] = useState(initialValue);
        const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value), []);
        return { val, onChange };
    };

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

    const formFields = Object.fromEntries(
        Object.entries(inputs).map(([key, { value }]) => {
            const formField = useFormField(value);
            return [key, formField];
        })
    );

    const renderedInputs = Object.entries(inputs).map(([key, v]) => {
        const { label, type } = v;
        const { val, onChange } = formFields[key];
        return (
            <Input
                key={key}
                label={label}
                value={val}
                name={key}
                type={type}
                onChange={onChange}
            />
        );
    });

    const formData = useMemo(() => Object.fromEntries(
        Object.entries(formFields).map(([key, { val }]) => [key, val])), [formFields]);

    const history = useHistory();

    const handleSubmit = useCallback(() => {
        axios
            .post('auth/signup', JSON.stringify(formData))
            .then(() => {
                history.push('/');
            })
            .catch(err => {
                const { error, reason } = err.response.data;

                setErrorMsg(`${error}: ${reason}`);
            });
    }, []);

    return (
        <Wrapper className="sign-up">
            <Form title="Регистрация" handleSubmit={handleSubmit}>
                {renderedInputs}
                {errorMsg ? errorBlock : ''}
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
