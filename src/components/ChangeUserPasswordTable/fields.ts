export const initialValues = {
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: '',
};

export const fields = [
    {
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
    },
    {
        label: 'Новый пароль (ещё раз)',
        name: 'newPasswordAgain',
        type: 'password',
    },
];
