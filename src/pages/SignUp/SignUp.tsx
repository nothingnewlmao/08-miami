import React, { FC } from 'react';
import { Input } from 'UIComponents/Input';
import { Form } from 'UIComponents/Form';
import { Button } from 'UI/components';

export const SignUp: FC = () => {
    const ref = React.createRef<HTMLInputElement>();
    const formRef = React.createRef<HTMLFormElement>();
    const title = 'Регистрация';

    return (
        <div className="sign-up">
            <Form ref={formRef} title={title}>
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
                    <Button view="primaryFlat">Уже есть аккаунт</Button>
                </div>
            </Form>
        </div>
    );
};
