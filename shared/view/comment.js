module.exports = (render, model) => render`
<article class='comment'>
  <span class='meta'><a href='${`/user/${model.by}`}'> ${model.by} </a> ${model.timeBetween} ago</span>
  <div class='body'>
    <p>${model.text}</p>
  </div>
  <ul class='${model.comments.length ? 'children' : 'hidden'}'>${model.comments}</ul>
</article>`;
