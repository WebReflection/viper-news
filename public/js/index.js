'use strict';

var _templateObject = _taggedTemplateLiteral(['\n        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">\n        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">\n        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n      '], ['\n        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">\n        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">\n        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">\n      ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var title = 'viperHTML 🐍 Hacker News';
var viperHTML = require('viperhtml');
var render = require('./render');

// basically this is the router
var showPage = function showPage() {
  var main = document.querySelector('main');

  // asking for users
  if (/^\/user\/([^?#]+)/.test(location.pathname)) {
    var id = lastClick = RegExp.$1;
    main.classList.add('opaque');
    render.header('user');
    fetch(location.pathname + '.json').then(function (body) {
      return body.json();
    }).then(function (user) {
      // avoid races with latest clicked section
      if (id === lastClick) {
        document.title = 'Profile: ' + user.id + ' | ' + title;
        render.main(render.user(user));
        scrollTo(0, 0);
        main.classList.remove('opaque');
      }
    });
  }

  // asking for a specific item
  else if (/^\/item\/(\d+)/.test(location.pathname)) {
      var _id = lastClick = RegExp.$1;
      main.classList.add('opaque');
      fetch(location.pathname + '.json').then(function (body) {
        return body.json();
      }).then(function (data) {
        // avoid races with latest clicked section
        if (_id === lastClick) {
          document.title = data.title;
          data.comments = data.comments.filter(filterComment).map(mapComment);
          render.main(render.item(data));
          scrollTo(0, 0);
          main.classList.remove('opaque');
        }
      });
    }

    // asking for stories / about
    else if (/^\/([a-z]+)(\/\d+)?$/.test(location.pathname)) {
        var story = lastClick = RegExp.$1;
        main.classList.add('opaque');
        render.header(story);
        switch (story) {
          case 'about':
            setTimeout(function () {
              if (story === lastClick) {
                render.about([]);
                scrollTo(0, 0);
                main.classList.remove('opaque');
              }
            }, 300);
            break;
          default:
            fetch(location.pathname + '.json').then(function (body) {
              return body.json();
            }).then(function (data) {
              // avoid races with latest clicked section
              if (story === lastClick) {
                document.title = title;
                render.main(data.items.map(render.summary).concat(data.next ? render.next(data) : []));
                scrollTo(0, 0);
                main.classList.remove('opaque');
              }
            });
            break;
        }
      }
};

// router helpers
var lastClick = void 0;

var filterComment = function filterComment(comment) {
  return !comment.deleted;
};

var mapComment = function mapComment(comment) {
  comment.comments = (comment.comments || []).filter(filterComment).map(mapComment);
  return render.comment(comment);
};

// routing is simply triggered by push/pop states
// FYI: onpushstate module is plain awesome
//      https://github.com/WebReflection/onpushstate
require('onpushstate');
addEventListener('pushstate', showPage);
addEventListener('popstate', showPage);

// add extra favicon circus in the mix
// after checking for ServiceWorker capabilities
addEventListener('load', function () {
  var favicon = function favicon() {
    return document.head.appendChild(viperHTML.wire()(_templateObject).reduce(function (f, children) {
      return f.appendChild(children), f;
    }, document.createDocumentFragment()));
  };

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').then(favicon);else favicon();
}, { once: true });