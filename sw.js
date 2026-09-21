// Trade Book service worker: keeps the app working offline. It never touches price requests.
const V = 'tradebook-v3';
const SHELL = ['./', 'index.html', 'companies.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  const ours = u.origin === self.location.origin || u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
  if (!ours) return; // price requests and everything else go straight to the network
  e.respondWith(
    caches.open(V).then(async cache => {
      const hit = await cache.match(req);
      const net = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      }).catch(() => hit || cache.match('index.html'));
      return hit || net;
    })
  );
});
