(() => {

  const openCache = caches.open('#[viper-news]');
  const any = $ => new Promise((D, E, A, L) => {
    A = [];
    L = $.map(($, i) => Promise
        .resolve($)
        .then(D, O => (((A[i] = O), --L) || E(A)))
    ).length;
  });

  addEventListener('install', e => {
    e.waitUntil(
      openCache.then(cache => cache.addAll([
        '/js/bundle.js',
        '/js/bundle.0.js',
        '/js/bundle.1.js',
        '/js/bundle.2.js',
        '/js/bundle.3.js',
        '/js/bundle.4.js',
        '/js/bundle.5.js',
        '/js/bundle.6.js',
        '/js/bundle.7.js',
        '/top/1'
      ]))
    );
  });

  addEventListener('fetch', e => {
    const request = e.request;
    e.respondWith(
      openCache.then(cache => cache.match(request).then(
        response => {
          const remote = fetch(request).then(
            response => {
              if (199 < response.status && response.status < 400) {
                cache.put(request, response.clone());
              }
              return response;
            }
          );
          return any([response || remote, remote]);
        }
      ))
    );
  });

})();