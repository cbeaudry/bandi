const CACHE_NAME = 'lottie-cache-v1';
const urlsToCache = [
  ///'/LottieAnimationProject/',                     // Répertoire racine de l’animation
  '/index.html',           // Fichier HTML principal
  '/manifest.json',        // Manifest de la PWA
  '/icon-192x192.png',     // Icône
  '/icon-512x512.png',     // Icône
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
