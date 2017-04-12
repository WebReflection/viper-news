const title = 'viperHTML 🐍 Hacker News';
const viperHTML = require('viperhtml');
const render = require('./render');

// basically this is the router
const showPage = () => {
  const main = document.querySelector('main');

  // asking for users
  if (/^\/user\/([^?#]+)/.test(location.pathname)) {
    const id = (lastClick = RegExp.$1);
    main.classList.add('opaque');
    render.header('user');
    fetch(location.pathname + '.json')
    .then(body => body.json())
    .then(user => {
      // avoid races with latest clicked section
      if (id === lastClick) {
        document.title = `Profile: ${user.id} | ${title}`;
        render.main(render.user(user));
        scrollTo(0, 0);
        main.classList.remove('opaque');
      }
    });
  }

  // asking for a specific item
  else if (/^\/item\/(\d+)/.test(location.pathname)) {
    const id = (lastClick = RegExp.$1);
    main.classList.add('opaque');
    fetch(location.pathname + '.json')
    .then(body => body.json())
    .then(data => {
      // avoid races with latest clicked section
      if (id === lastClick) {
        document.title = data.title;
        data.comments = data.comments
          .filter(filterComment)
          .map(mapComment);
        render.main(render.item(data));
        scrollTo(0, 0);
        main.classList.remove('opaque');
      }
    });
  }

  // asking for stories / about
  else if (/^\/([a-z]+)(\/\d+)?$/.test(location.pathname)) {
    const story = (lastClick = RegExp.$1);
    main.classList.add('opaque');
    render.header(story);
    switch (story) {
      case 'about':
        setTimeout(() => {
          if (story === lastClick) {
            render.about([]);
            scrollTo(0, 0);
            main.classList.remove('opaque');
          }
        }, 300);
        break;
      default:
        fetch(location.pathname + '.json')
        .then(body => body.json())
        .then(data => {
          // avoid races with latest clicked section
          if (story === lastClick) {
            document.title = title;
            render.main(
              data.items.map(render.summary)
                .concat(data.next ? render.next(data) : [])
            );
            scrollTo(0, 0);
            main.classList.remove('opaque');
          }
        });
        break;
    }
  }
};

// router helpers
let lastClick;

const filterComment = comment => !comment.deleted;

const mapComment = comment => {
  comment.comments = (comment.comments || [])
    .filter(filterComment)
    .map(mapComment);
  return render.comment(comment);
};



// routing is simply triggered by push/pop states
// FYI: onpushstate module is plain awesome
//      https://github.com/WebReflection/onpushstate
require('onpushstate');
addEventListener('pushstate', showPage);
addEventListener('popstate', showPage);

if ('serviceWorker' in navigator) addEventListener(
  'load',
  () => navigator.serviceWorker.register('/sw.js'),
  {once: true}
);

/*
// add favicon circus in the mix
// after checking for ServiceWorker capabilities
addEventListener(
  'load',
  () => {
    const favicon = () => document.head.appendChild(
      (viperHTML.wire()`
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      `).reduce(
        (f, children) => (f.appendChild(children), f),
        document.createDocumentFragment()
      )
    );

    if ('serviceWorker' in navigator)
      navigator.serviceWorker.register('/sw.js').then(favicon);
    else
      favicon();
  },
  {once: true}
);
*/
