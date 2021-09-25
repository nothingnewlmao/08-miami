import React, { FC } from 'react';
import { Input } from 'UIComponents/Input';

export const SignUp: FC = () => {
    const ref = React.createRef<HTMLInputElement>();

    return (
        <div className="sign-up">
            <Input ref={ref} />
        </div>
    );
};
