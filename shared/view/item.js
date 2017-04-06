module.exports = (render, model) => render`
<article class="item">
  <a class="main-link" href="${model.url}">
    ${model.title}
    <small> ${model.hostname ?
      `(${model.hostname.replace(/^www\./, '')})` : ''} </small>
  </a>
  <p class="meta">
    ${model.score} points by <a href="${`/user/${model.by}`}"> ${model.by} </a> ${model.timeBetween} ago
  </p>
</article>
<h3>
  ${model.descendants ? `${model.descendants} comments` : 'No comments yet'}
</h3>
<div class='comments'>${model.comments}</div>`;
