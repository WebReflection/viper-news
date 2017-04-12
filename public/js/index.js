'use strict';

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