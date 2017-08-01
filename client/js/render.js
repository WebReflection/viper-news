const hyperHTML = require('hyperhtml');

const asyncRenderView = (viewName, wire, model) =>
  import(`../../shared/view/${viewName}.js`).then(renderFn => renderFn(wire, model));

const view = {
  about: (wire, model) => asyncRenderView('about', wire, model),
  summary: (wire, model) => asyncRenderView('summary', wire, model),
  item: (wire, model) => asyncRenderView('item', wire, model),
  comment: (wire, model) => asyncRenderView('comment', wire, model),
  user: (wire, model) => asyncRenderView('user', wire, model),
  next: (wire, model) => asyncRenderView('next', wire, model)
};

const wire = {
  main: hyperHTML.bind(document.querySelector('main')),
  user: hyperHTML.wire(),
  next: hyperHTML.wire()
};

module.exports = {
  main: (model) => wire.main`${model}`,

  item: (model) => view.item(
    hyperHTML.wire(model),
    model
  ),

  comment: (model) => view.comment(
    hyperHTML.wire(model),
    model
  ),

  about: (model) => view.about(
    wire.main,
    model
  ),

  summary: (model) => view.summary(
    hyperHTML.wire(model),
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
