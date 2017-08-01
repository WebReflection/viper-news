(function () {

  var openCache = caches.open('#[viper-news]');
  var any = function any($) {
    return new Promise(function (D, E, A, L) {
      A = [];
      L = $.map(function ($, i) {
        return Promise.resolve($).then(D, function (O) {
          return (A[i] = O, --L) || E(A);
        });
      }).length;
    });
  };

  addEventListener('install', function (e) {
    e.waitUntil(openCache.then(function (cache) {
      return cache.addAll(['/js/bundle.js', '/js/bundle.0.js', '/js/bundle.1.js', '/js/bundle.2.js', '/js/bundle.3.js', '/js/bundle.4.js', '/js/bundle.5.js', '/js/bundle.6.js', '/js/bundle.7.js', '/top/1']);
    }));
  });

  addEventListener('fetch', function (e) {
    var request = e.request;
    e.respondWith(openCache.then(function (cache) {
      return cache.match(request).then(function (response) {
        var remote = fetch(request).then(function (response) {
          if (199 < response.status && response.status < 400) {
            cache.put(request, response.clone());
          }
          return response;
        });
        return any([response || remote, remote]);
      });
    }));
  });
})();