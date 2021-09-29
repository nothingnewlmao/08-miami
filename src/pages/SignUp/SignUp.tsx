import React, { FC, useState } from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Link, useHistory } from 'react-router-dom';
import TObjectLiteral from 'types/ObjectLiteral';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import axios from 'axios';

export const SignUp: FC = () => {
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

    const formData = Object.fromEntries(
        Object.entries(inputs).map(([key, { value }]) => [key, value]),
    );

    const [inputsValues, setInputsValue] = useState(formData);
    const [errorMsg, setErrorMsg] = useState('');

    const renderInputs = Object.entries(inputsValues).map(([key, value]) => {
        const { label, type } = inputs[key];
        return (
            <Input
                key={key}
                label={label}
                value={value}
                name={key}
                type={type}
                setInputsValue={setInputsValue}
            />
        );
    });

    const errorBlock = <div className="-error">{errorMsg}</div>;

    const history = useHistory();

    const handleSubmit = () => {
        axios
            .post('auth/signup', JSON.stringify(inputsValues))
            .then(() => {
                history.push('/');
            })
            .catch(err => {
                console.log(err.response);
                const {
                    error,
                    reason
                } = err.response.data;

                setErrorMsg(`${error}: ${reason}`);
            });
    };

    return (
        <Wrapper className="sign-up">
            <Form title="Регистрация" handleSubmit={handleSubmit}>
                {renderInputs}
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
