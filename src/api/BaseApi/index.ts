export default class BaseApi {
    static URL = 'ya-praktikum.tech/api/v2';

    public static get(path: string) {
        return fetch(`${this.URL}/${path}`);
    }

    public static post(path: string, body: FormData | string) {
        return fetch(`${this.URL}/${path}`, {
            method: 'POST',
            body,
        });
    }
}
