const viperHTML = require('viperhtml');
const path = require('path');
const view = new Proxy(
  new String(path.join(__dirname, '..', '..', 'shared', 'view')),
  {get: (base, module) => require(base + path.sep + module)}
);

const wire = {
  page: viperHTML.async(),
  header: viperHTML.wire(),
  about: viperHTML.wire(),
  user: viperHTML.wire(),
  next: viperHTML.wire()
};

module.exports = {

  // async wires - parent
  page: (chunks, model) => view.index(
    wire.page(chunks),
    model
  ),

  // async wires - children
  item: (model) => view.item(
    viperHTML.async(model)(),
    model
  ),
  comment: (model) => view.comment(
    viperHTML.async(model)(),
    model
  ),

  // runtime wires
  summary: (model) => view.summary(
    viperHTML.wire(model),
    model
  ),

  // single wires
  header: (model) => view.header(
    wire.header,
    model
  ),
  about: (model) => view.about(
    wire.about,
    model
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
