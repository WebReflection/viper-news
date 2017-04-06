module.exports = (render, model) => render`
<h1> ${model.id} </h1>
<p>...joined <strong> ${model.ago} </strong>, and has <strong> ${model.karma} </strong> karma</p>
<p>
  <a href="${'https://news.ycombinator.com/submitted?id=' + model.id}"> submissions </a> /
  <a href="${'https://news.ycombinator.com/threads?id=' + model.id}"> comments </a> /
  <a href="${'https://news.ycombinator.com/favorites?id=' + model.id}"> favourites </a>
</p>
<div class="${'about' + (model.about ? '' : ' hidden')}">
  <p>${model.about || ''}</p>
</div>`;
