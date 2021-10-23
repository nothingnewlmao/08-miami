import 'jsdom-global/register';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import { themes } from 'ui/themes';
import { InnerForm as Form } from 'ui/components/Form';

const { light } = themes;

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

const template = () => (
    <ThemeProvider theme={light}>
        <Form
            title="Title"
            handleSubmit={() => ''}
            fields={fields}
            initialValues={initialValues}
        />
    </ThemeProvider>
);

const callback = jest.fn();

afterEach(() => {
    cleanup();
});

describe('Form', () => {
    it('Should ???', async () => {
        /**
         * тестирование отправки данных по нажатию кнопки нецелесообразно,
         * так как это, по сути, тестирование сайд-эффекта саги
         *
         * тестирование отображения ошибок пустого поля в форме после нажатия на кнопку отправить
         * так же не целесообразно, так как это тестирование рендера ошибки у инпута
         */
        const createRTLInstance = () => render(template());

        const { getByText, getByLabelText } = createRTLInstance();
        const input = getByLabelText('Логин');
        const submitBtn = getByText('Присоединиться');

        callback.mockClear();

        fireEvent.click(submitBtn);

        console.log(input);
    });

    it('Is equal to snapshot', () => {
        const tree = renderer.create(template()).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
