const express = require('express');

const app = express();
const path = require('path');
const PORT = 6969;
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');
const fs = require('fs');

const metatagsManager = require('./metatagsManager');

// static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, '..', 'build'), {
    maxAge: '30d',
    index: '_',
  })
);
console.clear();
app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log('listening on localhost:' + PORT + ' ...');
});

console.log('=====================================================');

// here we serve the index.html page
app.get('/*', (req, res, next) => {
  // TODO
  fs.readFile(indexPath, 'utf8', async (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }
    // Get Meta tags:
    // TODO inject meta tags
    const routeMetaTags = (await metatagsManager(req.params[0])) || {};
  
    const finalHtml = htmlData
      .replace(/__TITLE_PLACEHOLDER__/g, routeMetaTags.title)
      .replace(/__DESCRIPTION_PLACEHOLDER__/g, routeMetaTags.description)
      .replace(/__IMAGE_PLACEHOLDER__/g, routeMetaTags.image);

    return res.send(finalHtml);
  });
});
