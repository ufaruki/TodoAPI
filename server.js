var express = require('express'),
  app = express(),   
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Todo = require('./api/models/todoModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb', { 'useMongoClient': true });

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 
var routes = require('./api/routes/todoRoutes');
routes(app);

app.listen(port);

console.log('todo RESTful API server started on: ' + port);