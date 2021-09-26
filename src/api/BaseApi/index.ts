export default class BaseApi {
    static URL = 'https://ya-praktikum.tech/api/v2';

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
            credentials: 'include',
            method: 'POST',
            body,
            headers,
        });
    }
}
