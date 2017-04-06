'use strict';

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

self.addEventListener('install', function (e) {
  e.waitUntil(openCache.then(function (cache) {
    return cache.addAll(['/', '/css/bundle.css', '/js/bundle.js']);
  }));
});

self.addEventListener('fetch', function (e) {
  var request = e.request;
  e.respondWith(openCache.then(function (cache) {
    return cache.match(request).then(function (response) {
      var remote = fetch(request).then(function (response) {
        cache.put(request, response.clone());
        return response;
      });
      return any([response || remote, remote]);
    });
  }));
});