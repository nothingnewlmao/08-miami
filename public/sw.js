const CACHE_NAME = 'v1';

const URLS = ['/', '/leaderboard', '/forum', '/sign-up', '/game', '/loading', '/bundle.js'];

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

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request)
        })
    )
})

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
