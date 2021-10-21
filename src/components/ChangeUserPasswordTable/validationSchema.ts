import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required('Введите пароль')
        .equals(['newPassword']),
    newPassword: Yup.string()
        .required('Введите новый пароль')
        .equals(['oldPassword']),
    newPasswordAgain: Yup.string().required('Введите новый пароль (опять)'),
});

export default validationSchema;
