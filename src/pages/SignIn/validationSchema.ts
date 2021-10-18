import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    login: Yup.string().required('Введите логин'),
    password: Yup.string().required('Введите пароль'),
});

export default validationSchema;
