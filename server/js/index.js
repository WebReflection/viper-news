const compression = require('compression');
const express = require('express');
const path = require('path');
const url = require('url');
const fs = require('fs');


const app = express();
app.enable('trust proxy');
app.use(function (req, res, next) {
  return req.secure || ('localhost' === req.hostname) ?
    next() :
    res.redirect('https://' + req.headers.host + req.url);
});
app.use(compression({threshold: 0}));
app.use(
  express.static(
    path.join(__dirname, '..', '..', 'public'),
    {maxAge: '30 days'}
  )
);


const title = 'viperHTML 🐍 Hacker News';
const PAGE_SIZE = 20;

const shared = new Proxy(
  new String(path.join(__dirname, '..', '..', 'shared', 'js')),
  {get: (base, module) => require(base + path.sep + module)}
);

const ago = shared.ago;
const timeBetween = shared.timebetween;
const render = require('./render');

const hn = require( './hn' );
hn.stories.forEach(story => {

  const getInfo = (req) => ({
    title,
    story,
    stories: hn.stories,
    page: +req.params.page
  });

  app.get(`/${story}/:page.json`, (req, res) => {
    serveJSON(res, getInfo(req));
  });

  app.get(`/${story}/:page`, (req, res) => {
    serve(res, getInfo(req));
  });

});



// INDEX & STORIES
app.get('/', (req, res) => {
  res.redirect(`/${hn.stories[0]}/1`);
});



// USERS
const addTimeAgo = user => {
  user.ago = ago(user);
  return user;
};

app.get('/user/:id.json', (req, res) => {
  hn.user(req.params.id)
    .then(user => JSON.stringify(addTimeAgo(user)))
    .then(json => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(json);
    });
});

app.get('/user/:id', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  hn.user(req.params.id).then(user => render.page(
    chunk => res.write(chunk),
    withStyle({
      title: `Profile: ${user.id} | ${title}`,
      header: render.header({
        story: 'user',
        stories: hn.stories
      }),
      main: render.user(addTimeAgo(user))
    })
  )).then(() => res.end());
});



// ITEMS & COMMENTS
const augmentJSONComment = item => new Promise(res => {
  Promise.all((item.kids || []).map(
    id => hn.item(id).then(item => augmentJSONComment(item))
  )).then(comments => res(Object.assign(
    {comments},
    augmentItem(item, 0)
  )));
});

app.get('/item/:id.json', (req, res) => {
  hn.item(req.params.id)
    .then(augmentJSONComment)
    .then(item => JSON.stringify(item))
    .then(json => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(json);
    });
});


const augmentComment = item => Object.assign(
  {comments: (item.kids || []).map(id => hn.item(id)
                             .then(item => render.comment(augmentComment(item))))},
  augmentItem(item, 0)
);

app.get('/item/:id', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  hn.item(req.params.id).then(item => render.page(
    chunk => res.write(chunk),
    withStyle({
      title: item.title,
      header: render.header({
        story: 'item',
        stories: hn.stories
      }),
      main: render.item(augmentComment(item))
    })
  )).then(() => res.end());
});



// ABOUT
app.get('/about', (req, res) => {

  const info = {
    title,
    story: 'about',
    stories: hn.stories
  };

  res.writeHead(200, {'Content-Type': 'text/html'});
  render.page(
    chunk => res.write(chunk),
    Object.assign(
      withStyle({
        header: render.header(info),
        main: render.about(info)
      }),
      info
    )
  ).then(() => res.end());

});

const style = fs.readFileSync(path.join(__dirname, '..', '..', 'public', 'css', 'bundle.css'));
const withStyle = info => Object.assign(info, {style: style});

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
});



// INDEX & STORIES utiities
function augmentItem(info, index) {
  if (info.url && !info.hostname)
    info.hostname = url.parse(info.url).hostname;
  info.timeBetween = timeBetween(info.time, Date.now() / 1e3);
  info.index = index;
  return info;
}

function serveJSON(res, info) {
  const end = info.page * PAGE_SIZE;
  const start = end - PAGE_SIZE;

  let next;

  // grabbing all the items at once
  hn.story(info.story)
    .then(items => {
      next = end < items.length ?
        `/${info.story}/${info.page + 1}` : '';
      return Promise.all(
        items.slice(start, end).map((item, i) =>
          hn.item(item)
            .then(item => augmentItem(
              item,
              (PAGE_SIZE * (info.page - 1)) + i + 1
            ))
        )
      );
    })
    .then(items => JSON.stringify({items, next}))
    .then(json => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(json);
    });

}

function serve(res, info) {
  const end = info.page * PAGE_SIZE;
  const start = end - PAGE_SIZE;

  // streaming items as these arrive
  res.writeHead(200, {'Content-Type': 'text/html'});
  hn.story(info.story).then(items => render.page(
    chunk => res.write(chunk),
    Object.assign(
      withStyle({
        header: render.header(info),
        main: items.slice(start, end).map((item, i) =>
          hn.item(item)
            .then(item =>
              render.summary(augmentItem(
                item,
                (PAGE_SIZE * (info.page - 1)) + i + 1
              )))
        ).concat(
          end < items.length ?
            render.next({next: `/${info.story}/${info.page + 1}`}) : []
        )
      }),
      info
    )
  )).then(() => res.end());

}
