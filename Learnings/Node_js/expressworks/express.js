// -> Express js
// It is popular web-application framework for Node.js
// It is used to build web applications and API's
// develop and maintain by node.js foundation

// -> why use  Express.js
// saves time, simple routing, middleware support(Aythentication, Logging, Error handling, parsing requests).
// Easy to connect with front end like react js, vue js.
// Support all routing methods.

// -> where to use
// web servers and API's
// Fullstack apps
// server side

// -> comptetor
// Fastify, Nestjs, koa.js, Hapi.js


// -> Middleware in express.js
// middleware support(Authentication, Logging, Error handling, parsing requests).
// set of functions, executed during request and response cycle.
// it can modify or termiante the req and res.


// -> Routing in express.js
// client send the request to server and the server respone to the client depends on url and methods.


console.log("**************** Routing in express*****************");
const express = require('express');
const app1 = express();

// Route for home page
app1.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

// Route for about page
app1.get('/about', (req, res) => {
  res.send('About Page');
});

app1.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});


//
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  console.log(`Username: ${username}, Email: ${email}`);
  res.send(`User Submitted: <br> Username: ${username} <br> Email: ${email}`);
});

// Start the server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
