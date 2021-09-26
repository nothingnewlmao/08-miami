import React, { FC, useState } from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Wrapper } from 'pages/Leaderboard/styled';
import { Link } from 'react-router-dom';
import AuthApi from 'api/Auth/auth';
import TObjectLiteral from 'types/ObjectLiteral';

export const SignUp: FC = () => {
    const formRef = React.createRef<HTMLFormElement>();
    const title = 'Регистрация';

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
        last_name: {
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

    const formData = Object.fromEntries(Object.entries(inputs)
        .map(([key, { value }]) => [key, value]));

    const [inputsValues, setInputsValue] = useState(formData);

    const renderInputs = Object.entries(inputsValues)
        .map(([key, value]) => {
            const {
                label,
                type,
            } = inputs[key];
            return (
                <Input
                    label={label}
                    value={value}
                    name={key}
                    type={type}
                    setInputsValue={setInputsValue}
                />
            );
        });

    const handleSubmit = () => {
        AuthApi.signup(inputsValues);
    };

    return (
        <Wrapper className="sign-up">
            <Form
                ref={formRef}
                title={title}
                handleSubmit={handleSubmit}
            >
                {renderInputs}
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
