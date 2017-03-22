module.exports = (render, model) => render`
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width'>
    <title> ${model.title} </title>
    <link rel="stylesheet" href="/dist/bundle.css">
  </head>
  <body>
    <header>${model.header}</header>
    <main>${model.main}</main>
  </body>
  <script async src='/dist/bundle.js'></script>
</html>`;
