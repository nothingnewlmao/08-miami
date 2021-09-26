import React, { FC } from 'react';
import { Input } from 'uicomponents/Input';
import { Form } from 'uicomponents/Form';
import { Button } from 'uicomponents/Button';
import { Wrapper } from 'pages/Leaderboard/styled';
import { Link } from 'react-router-dom';
import AuthApi from 'api/Auth/auth';

const AuthApiInstance = new AuthApi();

export const SignUp: FC = () => {
    const ref = React.createRef<HTMLInputElement>();
    const formRef = React.createRef<HTMLFormElement>();
    const title = 'Регистрация';

    const handleSubmit = (val: any) => {
        const formData = new FormData(val);
        AuthApiInstance.signup(formData);
    }

    return (
        <Wrapper className="sign-up">
            <Form
                ref={formRef}
                title={title}
                handleSubmit={handleSubmit}
            >
                <Input ref={ref} label="Почта" name="ema!il" />
                <Input label="Логин" name="login" />
                <Input label="Имя" name="first_name" />
                <Input label="Фамилия" name="last_name" />
                <Input label="Телефон" name="phone" />
                <Input label="Пароль" type="password" name="password" />
                <Input label="Пароль (ещё раз)" type="password" />
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
