// forked in sveltejs repo
// https://github.com/sveltejs/svelte-hackernews/blob/master/shared/routes/User.html#L31

module.exports = (user) => {
  const d = new Date();
  const today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const created = new Date(user.created * 1e3);
  const elapsedDays = (today - created) / (86400 * 1e3);
  if (elapsedDays < 0) return 'today';
  if (elapsedDays < 1) return 'yesterday';
  return Math.ceil(elapsedDays) + ' days ago';
};