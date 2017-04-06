module.exports = (render, model) => render`
<article>
  <h2>
    <a href='${model.url ? model.url : `/item/${model.id}` }'>
      ${model.title}
      <small> ${model.hostname ?
        `(${model.hostname.replace(/^www\./, '')})` : ''} </small>
    </a>
  </h2>
  <p>
    ${model.score} points by <a href='${`/user/${model.by}`}'> ${model.by} </a>${
      `${model.timeBetween} ago | <a href='/item/${model.id}'>${model.descendants || 0} comments</a>`
  }</p>
  <span class='index'>
    ${model.index}
  </span>
</article>`;
