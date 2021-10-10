export interface IFormRegValues {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface IFormInputProps {
    label: string;
    name: keyof IFormRegValues;
    type?: string;
}

export interface IOtherProps {
    title?: string;
    fields?: IFormInputProps[];
}

export interface IInitialFormProps {
    initialFirstName?: string;
    initialSecondName?: string;
    initialLogin?: string;
    initialEmail?: string;
    initialPassword?: string;
    initialPhone?: string;
}
