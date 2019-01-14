//- use require method for express module
const express = require('express');
//-call the exppres method
const app = express();
//require body parser, body parser and cookie parser are middleware
const bodyParser = require('body-parser');
//require cookie-Parser
const cookieParser = require('cookie-parser');
// use bodyParser in app to read post
app.use(bodyParser.urlencoded({extended: false}));
// ose cookieParser in app to store data and make server to remember data
app.use(cookieParser());
// use express.static to serve static assets
app.use('/static',express.static('public'));
//told express to use pug
app.set('view engine', 'pug');
// import routs from index,js
const routes = require('./routes/index.js');
//use routes variable in a middleware function to pass in the routes
app.use(routes);

// catch 404 and passes to error handler
app.use((req, res, next) =>{
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
//error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
      message: error.message,
      error: {}
    });
})
//-setup the development server using the listen method
app.listen(3000, () => {
console.log()
});
