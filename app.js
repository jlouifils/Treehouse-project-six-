const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/about',(req, res) =>{
  res.render('about');
});

app.get('/index',(req, res) =>{
  res.render('index');
});

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
