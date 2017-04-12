module.exports = (render, model) => render`
<!doctype html>
<html>
  <head>
    <title> ${model.title} </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#ffffff">
    <link rel="manifest" href="/manifest.json">
    <link rel="stylesheet" href="/css/bundle.css">
    <script async src="/js/bundle.js"></script>
  </head>
  <body>
    <header>${model.header}</header>
    <main>${model.main}</main>
  </body>
</html>`;
