webpackJsonp([3],{

/***/ 11:
/***/ (function(module, exports) {

// forked in sveltejs repo
// https://github.com/sveltejs/svelte-hackernews/blob/master/shared/routes/User.html#L31

module.exports = function (user) {
  var d = new Date();
  var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var created = new Date(user.created * 1e3);
  var elapsedDays = (today - created) / (86400 * 1e3);
  if (elapsedDays < 0) return 'today';
  if (elapsedDays < 1) return 'yesterday';
  return Math.ceil(elapsedDays) + ' days ago';
};

/***/ })

});