module.exports = (render, model) => render`
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width'>
    <title> ${model.title} </title>
    <link rel="stylesheet" href="/css/bundle.css">
    <script async src='/js/bundle.max.js'></script>
  </head>
  <body>
    <header>${model.header}</header>
    <main>${model.main}</main>
  </body>
</html>`;
