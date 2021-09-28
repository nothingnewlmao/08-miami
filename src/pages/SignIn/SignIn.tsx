import React, { FC, useState } from 'react';
import TObjectLiteral from 'types/ObjectLiteral';
import { Button, Input } from 'ui/components';
import { Wrapper } from 'uicomponents/Wrapper/styled';
import { Form } from 'uicomponents/Form';
import { Link } from 'react-router-dom';

export const SignIn: FC = () => {
    const title = 'Вход';

    const inputs: TObjectLiteral = {
        login: {
            label: 'Логин',
            value: '',
            type: '',
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

    const handleSubmit = () => {};

    return (
        <Wrapper>
            <Form title={title} handleSubmit={handleSubmit}>
                {renderInputs}
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
