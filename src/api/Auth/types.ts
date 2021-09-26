interface IAuth {
    login: string;
    password: string;
}

export type TSignUp = FormData | IAuth & {
    first_name: string;
    second_name: string;
    email: string;
    phone: string;
};

export type TLogin = IAuth;
