export default class BaseApi {
    static URL = 'ya-praktikum.tech/api/v2';

    public static get(path: string) {
        return fetch(`${this.URL}/${path}`);
    }

    public static post(
        path: string,
        body: string,
        headers: Record<string, string> = {
            'Content-Type': 'application/json',
        },
    ) {
        return fetch(`${this.URL}/${path}`, {
            method: 'POST',
            body,
            headers,
        });
    }
}
