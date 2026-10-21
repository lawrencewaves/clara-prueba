// Generado al compilar. Caché completa de la app (sin datos de usuario).
const CACHE = 'clara-b6f31032e492';
const FILES = ["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png","./favicon.svg","./assets/index-B2DEtt1Z.js","./assets/WebFileDialog-DVRJgbID.js","./assets/local-core-CoFdREa0.js","./assets/index-CWy96gjl.css","./assets/sql-wasm-C1D_RJuy.wasm"];
// La versión nueva se activa en cuanto está descargada (no espera a cerrar la app; los datos no se tocan).
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) =>
  Promise.all(ks.filter((k) => k.startsWith('clara-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) =>
    hit || (e.request.mode === 'navigate' ? caches.match('./index.html') : fetch(e.request))));
});
self.addEventListener('message', (e) => { if (e.data === 'skipWaiting') self.skipWaiting(); });
