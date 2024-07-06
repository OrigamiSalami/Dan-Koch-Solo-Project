const path = require('path');
const express = require('express');
const apiController = require('controllers/apiController')
const app = express();
const PORT = 3000;

/**
 * require routers
 */

/**
 * handle parsing request body
 */
console.log('server exists')
app.use(express.json());
 
/**
 * handle requests index.html
 */
// app.use('/',express.static(path.join(__dirname, 'public/index.html')));

/**
 * define route handlers
 */


app.get('/', apiController.getCity, (req, res) => {
    console.log("function hit")
    req.send("There's a snake in my boot")
});



// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));


function errorHandler (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  }  
  
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
}

app.use(errorHandler);
/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;