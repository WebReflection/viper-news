const viperHTML = require('viperhtml');

const view = {
  about: require('../../shared/view/about'),
  summary: require('../../shared/view/summary'),
  item: require('../../shared/view/item'),
  comment: require('../../shared/view/comment'),
  user: require('../../shared/view/user'),
  next: require('../../shared/view/next')
};

const wire = {
  main: viperHTML.bind(document.querySelector('main')),
  user: viperHTML.wire(),
  next: viperHTML.wire()
};

module.exports = {
  main: (model) => wire.main`${model}`,

  item: (model) => view.item(
    viperHTML.wire(model),
    model
  ),
  comment: (model) => view.comment(
    viperHTML.wire(model),
    model
  ),

  about: (model) => view.about(
    wire.main,
    model
  ),
  summary: (model) => view.summary(
    viperHTML.wire(model),
    model
  ),

  // it could've been like the server-side one
  // here showing off other patterns/potentials
  header: (story) => [].forEach.call(
    document.querySelectorAll('header a'),
    a => {
      a.classList[
        ~a.getAttribute('href')
          .indexOf(`/${story}`) ?
            'add' : 'remove'
      ]('selected');
    }
  ),
  user: (model) => view.user(
    wire.user,
    model
  ),
  next: (model) => view.next(
    wire.next,
    model
  )
};
