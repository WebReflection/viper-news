webpackJsonp([2],{

/***/ 12:
/***/ (function(module, exports) {

// forked in sveltejs repo
// https://github.com/sveltejs/svelte-hackernews/blob/master/shared/helpers/timebetween.js

var MINUTE = 60;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;

function plural(num, unit) {
  num = ~~num;
  if (num !== 1) unit += 's';
  return num + ' ' + unit;
}

module.exports = function (a, b) {
  var elapsed = b - a;
  if (elapsed < HOUR) return plural(elapsed / MINUTE, 'minute');else if (elapsed < DAY) return plural(elapsed / HOUR, 'hour');
  return plural(elapsed / DAY, 'day');
};

/***/ })

});