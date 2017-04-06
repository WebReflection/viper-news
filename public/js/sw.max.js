'use strict';

var cache = caches.open('#[viper-news]');
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

self.addEventListener('install', function (e) {
  e.waitUntil(cache.then(function (cache) {
    return cache.addAll(['/', '/css/bundle.css', '/js/bundle.js']);
  }));
});

self.addEventListener('fetch', function (e) {
  e.respondWith(cache.match(e.request).then(function (response) {
    var remote = fetch(e.request);
    if (!response) {
      cache.put(e.request, (response = remote).catch(function () {
        return cache.delete(e.request);
      }));
    }
    return any([response, remote]);
  }));
});