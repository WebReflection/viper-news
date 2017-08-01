const hyperApp = require('hyperhtml-app');
const render = require('./render');

const app = hyperApp();
const title = 'viperHTML 🐍 Hacker News';

// router helpers
let lastClick;

// main container
const main = () => document.querySelector('main');

// helpers
const fadeIn = (value) => {
  scrollTo(0, 0);
  main().classList.remove('opaque');
  return value;
};

const filterComment = comment => !comment.deleted;

const mapComment = comment => {
  comment.comments = (comment.comments || [])
    .filter(filterComment)
    .map(mapComment);
  return render.comment(comment);
};

// app routes
app.get('/user/:name', ctx => {
  const pathname = (lastClick = location.pathname);
  main().classList.add('opaque');
  render.header('user');
  fetch(pathname + '.json')
    .then(body => body.json())
    .then(user => {
      if (lastClick === pathname) {
        document.title = `Profile: ${user.id} | ${title}`;
        render.main(render.user(user).then(fadeIn));
      }
    });
});

app.get('/item/:id(\\d+)', ctx => {
  const pathname = (lastClick = location.pathname);
  main().classList.add('opaque');
  fetch(pathname + '.json')
    .then(body => body.json())
    .then(data => {
      if (lastClick === pathname) {
        document.title = data.title;
        data.comments = data.comments
          .filter(filterComment)
          .map(mapComment);
        render.main(render.item(data).then(fadeIn));
      }
    });
});

app.get('/about', ctx => {
  const pathname = (lastClick = location.pathname);
  main().classList.add('opaque');
  render.header('about');
  setTimeout(() => {
    if (lastClick === pathname) {
      render.about([]).then(fadeIn);
    }
  }, 150);
});

app.get('/:section/:id(\\d+)', ctx => {
  const pathname = (lastClick = location.pathname);
  main().classList.add('opaque');
  render.header(ctx.params.section);
  fetch(lastClick + '.json')
    .then(body => body.json())
    .then(data => {
      if (lastClick === pathname) {
        document.title = title;
        render.main(
          Promise.all(
            data.items.map(render.summary)
            .concat(data.next ? render.next(data) : [])
          ).then(fadeIn)
        );
      }
    });
});

// ServiceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}