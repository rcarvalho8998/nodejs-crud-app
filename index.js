require('./db');
const express  = require('express');
const routes = require('./routes/routes');

var app = express();

app.use(express.json());

app.use('/', routes);

app.listen(5000, function(){
    console.log("Started application on port %", 5000);
});