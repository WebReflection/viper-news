var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hyperHTML = require('hyperhtml/cjs');

var asyncRenderView = function asyncRenderView(viewName, wire, model) {
  return import('../../shared/view/' + viewName + '.js').then(function (_ref) {
    var renderFn = _ref.default;
    return renderFn(wire, model);
  });
};

var view = {
  about: function about(wire, model) {
    return asyncRenderView('about', wire, model);
  },
  summary: function summary(wire, model) {
    return asyncRenderView('summary', wire, model);
  },
  item: function item(wire, model) {
    return asyncRenderView('item', wire, model);
  },
  comment: function comment(wire, model) {
    return asyncRenderView('comment', wire, model);
  },
  user: function user(wire, model) {
    return asyncRenderView('user', wire, model);
  },
  next: function next(wire, model) {
    return asyncRenderView('next', wire, model);
  }
};

var wire = {
  main: hyperHTML.bind(document.querySelector('main')),
  user: hyperHTML.wire(),
  next: hyperHTML.wire()
};

module.exports = {
  main: function main(model) {
    return wire.main(_templateObject, model);
  },

  item: function item(model) {
    return view.item(hyperHTML.wire(model), model);
  },

  comment: function comment(model) {
    return view.comment(hyperHTML.wire(model), model);
  },

  about: function about(model) {
    return view.about(wire.main, model);
  },

  summary: function summary(model) {
    return view.summary(hyperHTML.wire(model), model);
  },

  // it could've been like the server-side one
  // here showing off other patterns/potentials
  header: function header(story) {
    return [].forEach.call(document.querySelectorAll('header a'), function (a) {
      a.classList[~a.getAttribute('href').indexOf('/' + story) ? 'add' : 'remove']('selected');
    });
  },

  user: function user(model) {
    return view.user(wire.user, model);
  },

  next: function next(model) {
    return view.next(wire.next, model);
  }
};