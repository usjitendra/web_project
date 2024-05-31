const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const { connect } = require('./config/dbconnecton');

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Configure Nunjucks as the view engine
nunjucks.configure('app/view',{
    autoescape: false,
    express: app,
    watch: true
});
app.set('view engine', 'html');

// Import the model, passing the database connection
const model = require('./app/model/index')(connect);
 console.log("jjj",model)
console.log("aaaa");

// Import the controller, passing the model
let controller = require('./app/controller/index')(model);

// Debugging: Check if `controller` has an `admin` property
console.log(controller.admin.login.signin); 

// Uncomment the line below to use the router
require('./router/index')(app, controller, model);

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
