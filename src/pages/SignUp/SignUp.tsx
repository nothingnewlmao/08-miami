import React, { FC } from 'react';
import { Input } from 'UIComponents/Input';

export const SignUp: FC = () => {
    const ref = React.createRef<HTMLInputElement>();

    return (
        <div className="sign-up">
            <Input
                ref={ref}
                label="Почта"
                name="ema!il"
            />
            <Input
                label="Логин"
                name="login"
            />
            <Input
                label="Имя"
                name="first_name"
            />
            <Input
                label="Фамилия"
                name="last_name"
            />
            <Input
                label="Телефон"
                name="phone"
            />
            <Input
                label="Пароль"
                type="password"
                name="password"
            />
            <Input
                label="Пароль (ещё раз)"
                type="password"
            />
        </div>
    );
};
