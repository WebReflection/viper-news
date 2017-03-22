
const viperHTML = require('viperhtml');

const view = {
  about: require('../js/view/about'),
  article: require('../js/view/article'),
  comment: require('../js/view/comment'),
  header: require('../js/view/header'),
  index: require('../js/view/index'),
  next: require('../js/view/next')
};

const wire = {
  about: viperHTML.async(),
  comment: viperHTML.async(),
  header: viperHTML.async(),
  index: viperHTML.async(),
  next: viperHTML.wire()
};

module.exports = {
  page: (chunks, model) => view.index(
    wire.index(chunks),
    model
  ),
  article: (model) => view.article(
    viperHTML.wire(model),
    model
  ),
  comment: (model) => view.comment(
    wire.comment(),
    model
  ),
  about: (model) => view.about(
    wire.about(),
    model
  ),
  header: (model) => view.header(
    wire.header(),
    model
  ),
  next: (model) => model.next ?
    view.next(
      wire.next,
      model
    ) : ''
};
