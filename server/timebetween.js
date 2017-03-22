// forked in sveltejs repo
// https://github.com/sveltejs/svelte-hackernews/blob/master/shared/helpers/timebetween.js

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function plural(num, unit) {
  num = ~~num;
  if (num !== 1) unit += 's';
  return `${num} ${unit}`;
}

module.exports = (a, b) => {
  const elapsed = b - a;
  if (elapsed < HOUR)
    return plural(elapsed / MINUTE, 'minute');
  else if (elapsed < DAY)
    return plural(elapsed / HOUR, 'hour');
  return plural(elapsed / DAY, 'day');
};
