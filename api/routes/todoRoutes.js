'use strict';

module.exports = function(app) {
  var todo = require('../controllers/todoController');

  //Routes  
  app.get('/todos/getAllTodos', todo.getAllTodos)
    .get('/todos/getPendingTodos', todo.getPendingTodos)    
    .post('/todos', todo.createTodo)
    .put('/todos', todo.markCompleted)
};