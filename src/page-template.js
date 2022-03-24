module.exports = templateData => {
  console.log(templateData);

  return `
  <!DOCTYPE html>
  <head lang="en">

  <head>
    <meta charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-compatible" content="ie=edge">
    <title>Portfolio</title>
  </head>

  <body>
    <h1>${templateData.name}</h1>
    <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
  </body>
  </html>
  `;
};