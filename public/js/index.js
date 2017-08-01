var hyperApp = require('hyperhtml-app');
var render = require('./render');

var app = hyperApp();
var title = 'viperHTML 🐍 Hacker News';

// router helpers
var lastClick = void 0;

// main container
var main = function main() {
  return document.querySelector('main');
};

// helpers
var fadeIn = function fadeIn(value) {
  scrollTo(0, 0);
  main().classList.remove('opaque');
  return value;
};

var filterComment = function filterComment(comment) {
  return !comment.deleted;
};

var mapComment = function mapComment(comment) {
  comment.comments = (comment.comments || []).filter(filterComment).map(mapComment);
  return render.comment(comment);
};

// app routes
app.get('/user/:name', function (ctx) {
  var pathname = lastClick = location.pathname;
  main().classList.add('opaque');
  render.header('user');
  fetch(pathname + '.json').then(function (body) {
    return body.json();
  }).then(function (user) {
    if (lastClick === pathname) {
      document.title = 'Profile: ' + user.id + ' | ' + title;
      render.main(render.user(user).then(fadeIn));
    }
  });
});

app.get('/item/:id(\\d+)', function (ctx) {
  var pathname = lastClick = location.pathname;
  main().classList.add('opaque');
  fetch(pathname + '.json').then(function (body) {
    return body.json();
  }).then(function (data) {
    if (lastClick === pathname) {
      document.title = data.title;
      data.comments = data.comments.filter(filterComment).map(mapComment);
      render.main(render.item(data).then(fadeIn));
    }
  });
});

app.get('/about', function (ctx) {
  var pathname = lastClick = location.pathname;
  main().classList.add('opaque');
  render.header('about');
  setTimeout(function () {
    if (lastClick === pathname) {
      render.about([]).then(fadeIn);
    }
  }, 150);
});

app.get('/:section/:id(\\d+)', function (ctx) {
  var pathname = lastClick = location.pathname;
  main().classList.add('opaque');
  render.header(ctx.params.section);
  fetch(lastClick + '.json').then(function (body) {
    return body.json();
  }).then(function (data) {
    if (lastClick === pathname) {
      document.title = title;
      render.main(Promise.all(data.items.map(render.summary).concat(data.next ? render.next(data) : [])).then(fadeIn));
    }
  });
});

// ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}