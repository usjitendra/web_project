
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser');
const nunjucks=require('nunjucks');
const path=require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

nunjucks.configure('app/view',{
    autoescape:false,
    express:app,
    watch:true
})
app.set('view engine','html');

const controller = require('./app/controller/index')();

console.log(controller.admin.login.signin); // Ensure `controller` has an `admin` property

require('./router/index')(app, controller); // Uncomment this to use the router

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

