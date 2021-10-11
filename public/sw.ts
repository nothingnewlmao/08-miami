/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/// <reference lib="WebWorker" />

// eslint-disable-next-line no-restricted-globals
const sw = self as ServiceWorkerGlobalScope & typeof globalThis;

const CACHE_NAME = 'my-site-cache-v1';

const URLS = ['/', '/leaderboard', '/forum', '/sign-up', '/game', '/loading'];

sw.addEventListener('install', (event) => {
    console.log('install');
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(URLS);
            })
            .catch((err) => {
                console.log(err);
                throw err;
            }),
    );
});

sw.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => (
            resp
                || fetch(event.request).then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                })
        )),
    );
});

sw.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames
                .filter(() => true)
                .map((name) => caches.delete(name)),
        )),
    );
});
