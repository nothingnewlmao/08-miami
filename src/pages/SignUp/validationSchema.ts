import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Name is required'),
    second_name: Yup.string().required('Surname is required'),
    login: Yup.string().required('Login is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
    phone: Yup.string().required('Phone is required'),
});

export default validationSchema;
