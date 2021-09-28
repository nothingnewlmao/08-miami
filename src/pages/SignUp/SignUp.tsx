import React, { FC, useState } from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Link, useHistory } from 'react-router-dom';
import AuthApi from 'api/Auth/auth';
import TObjectLiteral from 'types/ObjectLiteral';
import { Link } from 'react-router-dom';
import { Wrapper } from 'uicomponents/Wrapper/styled';

export const SignUp: FC = () => {
    const formRef = React.createRef<HTMLFormElement>();
    const title = 'Регистрация';
    const error = '';

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
    const [errorMsg, setErrorMsg] = useState(error);

    const renderInputs = Object.entries(inputsValues).map(([key, value]) => {
        const { label, type } = inputs[key];
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

    const errorBlock = <div className="-error">{errorMsg}</div>;

    const history = useHistory();

    const handleSubmit = () => {
        AuthApi.signup(inputsValues)
            .then(() => history.push('/'))
            .catch(err => setErrorMsg(err.message));
    };
    return (
        <Wrapper className="sign-up">
            <Form ref={formRef} title={title} handleSubmit={handleSubmit}>
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
