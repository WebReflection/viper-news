'use strict';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hyperHTML = require('hyperhtml');

var view = {
  about: require('../../shared/view/about'),
  summary: require('../../shared/view/summary'),
  item: require('../../shared/view/item'),
  comment: require('../../shared/view/comment'),
  user: require('../../shared/view/user'),
  next: require('../../shared/view/next')
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