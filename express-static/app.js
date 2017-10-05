const express = require('express');
const app = express();
const pug = require('pug');

app.set('view engine', 'pug');

console.log('locals', app.locals.settings);

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res, next) => {
  res.render('index', {
    loggedIn: false,
    url: '{req.url}'
  });
});




app.listen(1149, () => {
  console.log('listening on port 1150');
});