declare let self: ServiceWorkerGlobalScope;
export {};

const CACHE_NAME = 'v1';

const URLS = ['/', '/leaderboard', '/forum', '/sign-up', '/game', '/loading'];

self.addEventListener('install', (event) => {
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

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(
            (resp) => resp
                || fetch(event.request).then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                }),
        ),
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => Promise.all(
                cacheNames
                    .filter(() => true)
                    .map((name) => caches.delete(name)),
            )),
    );
});
