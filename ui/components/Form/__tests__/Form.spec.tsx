import 'jsdom-global/register';
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { themes } from 'ui/themes';
import { UIForm as Form } from 'ui/components/Form';

const { light } = themes;

afterEach(() => {
    cleanup();
});

describe('Form', () => {
    it('should render initial values in inputs ', async () => {
        const initialValues = {
            login: 'admin',
            password: 'somepassword',
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

        const mockHandle = jest.fn();

        render(
            <ThemeProvider theme={light}>
                <Form
                    handleSubmit={mockHandle}
                    fields={fields}
                    initialValues={initialValues}
                    title="Some title"
                />
            </ThemeProvider>,
        );

        const loginFieldValue: HTMLInputElement = screen
            // @ts-ignore
            // говорит, что value нет у HTMLElement
            .getByLabelText(fields[0].label).value;

        expect(loginFieldValue).toEqual(initialValues.login);
    });
});
