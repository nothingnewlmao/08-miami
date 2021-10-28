import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Введите имя'),
    secondName: Yup.string().required('Введите фамилю'),
    email: Yup.string().required('Введите email').email('Неправильнный формат'),
    displayName: Yup.string().required('Введите отображаемое имя'),
    phone: Yup.string().required('Введите телефонный номер').length(11),
});

export default validationSchema;
