import 'jsdom-global/register';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { themes } from 'ui/themes';
import { InnerForm as Form } from 'ui/components/Form';

const { light } = themes;

const createRTLInstance = () => {
    const initialValues = {
        login: '',
        password: '',
    };

    const fields = [
        {
            label: 'Логин',
            name: 'login',
        },
        {
            label: 'Пароль',
            name: 'password',
            type: 'password',
        },
    ];

    return render(
        <ThemeProvider theme={light}>
            <Form
                title="Вход"
                handleSubmit={() => {}}
                fields={fields}
                initialValues={initialValues}
            />
        </ThemeProvider>,
    );
};

const callback = jest.fn();

afterEach(() => {
    cleanup();
});

describe('Form tests', () => {
    it('Should show error on inputs if they are empty', () => {
        const { getByText, getByLabelText } = createRTLInstance();
        const input = getByLabelText('Логин');
        const submitBtn = getByText('Присоединиться');

        callback.mockClear();
        fireEvent.click(submitBtn);

        console.log(input);
    });
});
