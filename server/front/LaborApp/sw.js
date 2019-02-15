const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1'

const APP_SHELL_STATIC = [
  // '/',
  'index.html',
  'main.js',
  'polyfills.js',
  'runtime.js',
  '4.js',
  'styles.css',
  'manifest.json',
  'favicon.ico',
  'assets/img/favicon.ico',
  'assets/img/logo.png',
  'assets/img/logob.png'

];
const APP_SELL_INMUTABLE = [
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
]


const actualizaCacheDinamico = (dynamicCache, req, res) => {

  if (res.ok) {
    return caches.open(dynamicCache)
      .then(cacheReady => {

        cacheReady.put(req, res.clone());
        return res;

      });

  } else {
    return res;
  }


}


self.addEventListener('install', event => {

  const cacheStatic = caches.open(STATIC_CACHE)
    .then(cacheReady => cacheReady.addAll(APP_SHELL_STATIC));


  const cacheInmutable = caches.open(INMUTABLE_CACHE)
    .then(cacheReady => cacheReady.addAll(APP_SELL_INMUTABLE));


  event.waitUntil(Promise.all([cacheStatic, cacheInmutable]))

});

self.addEventListener('activate', event => {

  const barrerCache = caches.keys().then(keys => {

    keys.forEach(cacheKey => {
      if (cacheKey !== STATIC_CACHE && cacheKey.includes('static')) {
        return caches.delete(cacheKey);
      }

      if (cacheKey !== DYNAMIC_CACHE && cacheKey.includes('dynamic')) {
        return caches.delete(cacheKey);
      }
    })

  })

  event.waitUntil(barrerCache);

});

self.addEventListener('fetch', event => {

  const respuesta = caches.match(event.request)
    .then(res => {

      if (res) {
        return res;
      } else {
        return fetch(event.request).then(fetchRes => {

          return actualizaCacheDinamico(DYNAMIC_CACHE, event.request, fetchRes);

        })
      }

    });

  event.respondWith(respuesta);

});
