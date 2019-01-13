const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use('/static',express.static(public));

app.set('view engine', 'pug');

const routes = require('./routes/index.js');

app.use(routes);


app.use((req, res, next) =>{
  const error = new Error('Not Found');
  error.status =404;
  next(error);
});

app.use((error, req, res, next) =>{
    res.locals.error = error;
    res.status(error.status || 500);
    res.render('error' error);
})

app.listen(3000, () => {

});
