webpackJsonp([6],{

/***/ 13:
/***/ (function(module, exports) {

var _templateObject = _taggedTemplateLiteral(['\n<nav>\n  <div class=\'icon\'><span>\uD83D\uDC0D</span></div>\n  <ul>', '</ul>\n</nav>'], ['\n<nav>\n  <div class=\'icon\'><span>\uD83D\uDC0D</span></div>\n  <ul>', '</ul>\n</nav>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = function (render, model) {
  return render(_templateObject, model.stories.map(function (story) {
    return '\n    <li>\n      <a  class="' + (model.story === story ? 'selected' : '') + '"\n          href="/' + story + '/1"> ' + (story === 'job' ? 'jobs' : story) + ' </a>\n    </li>\n    ';
  }).concat('\n    <li class=\'about\'>\n      <a  class="' + (model.story === 'about' ? 'selected' : '') + '"\n          href="/about"> about </a>\n    </li>\n  '));
};

/***/ })

});