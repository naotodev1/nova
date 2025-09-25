// Cache resources for offline use
const CACHE_NAME = 'facilita-plus-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest/dist/umd/lucide.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});
