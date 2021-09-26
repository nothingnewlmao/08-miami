export default class BaseApi {
    public static get(path: string) {
        return fetch(`${process.env.API_URL}/${path}`);
    }

    public static post(path: string, body: FormData | string) {
        return fetch(`${process.env.API_URL}/${path}`, {
            method: 'POST',
            body,
        });
    }
}
