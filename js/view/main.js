module.exports = (render, model) => render`
<main>${model.items.map(item => model.item(item).then(info => info.by)).concat(model.next || [])}</main>`;
