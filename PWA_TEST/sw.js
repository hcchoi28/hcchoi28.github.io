self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('static').then((cache) => cache.addAll([
      'sw.js',
      'EV90.html',
      
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

