const title = 'viperHTML 🐍 Hacker News';
const PAGE_SIZE = 20;

const compression = require( 'compression' );
const express = require( 'express' );
const url = require('url');

const hn = require( './hn.js' );
const render = require('./render');
const timeBetween = require('./timebetween');

const preload = [
	`</dist/bundle.css>; rel=preload; as=style`,
	`</dist/bundle.js>; rel=preload; as=script`
].join( ', ' );

// Express App
const app = express();

app.use(compression({threshold: 0}));
app.use(express.static('public'));

app.get( '/', ( req, res ) => {
  res.redirect( '/top/1' );
});

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

app.get('/about', (req, res) => {

  const info = {
    title,
    story: 'about',
    stories: hn.stories
  };

  res.writeHead(200, {
    'Content-Type': 'text/html',
    Link: preload
  });

  render.page(
    chunk => res.write(chunk),
    Object.assign(
      {
        header: render.header(info),
        main: render.about(info)
      },
      info
    )
  ).then(() => res.end());

});

app.listen('3000', () => {
  console.log('listening on localhost:3000');
});



// helpers

function augmentArticle(info, index) {
  if (info.url && !info.hostname)
    info.hostname = url.parse(info.url).hostname;
  info.timeBetween = timeBetween(info.time, Date.now() / 1e3);
  info.index = index;
  return info;
}

function serveJSON(res, info) {
  const end = info.page * PAGE_SIZE;
  const start = end - PAGE_SIZE;

  hn.story(info.story)
    .then(items => items.slice(start, end).map((item, i) =>
          hn.item(item)
            .then(info => augmentArticle(info, i + 1))))
    .then(items => JSON.stringify(items))
    .then(json => {
      res.writeHead(200, {
        'Content-Length': json.length,
        'Content-Type': 'application/json'
      });
      res.end(json);
    });
}

function serve(res, info) {

  const end = info.page * PAGE_SIZE;
  const start = end - PAGE_SIZE;

  res.writeHead( 200, {
    'Content-Type': 'text/html',
    Link: preload
  });

  hn.story(info.story).then(items => render.page(
    chunk => res.write(chunk),
    Object.assign(
      {
        header: render.header(info),
        main: items.slice(start, end).map((item, i) =>
          hn.item(item)
            .then(article =>
              render.article(augmentArticle(
                article,
                (PAGE_SIZE * (info.page - 1)) + i + 1
              )))
        ).concat(render.next({
          next: end < items.length ? `/${info.story}/${info.page + 1}` : null
        }))
      },
      info
    )
  )).then(() => res.end());

}
