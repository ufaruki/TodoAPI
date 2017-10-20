'use strict';

var 
	mongoose = require('mongoose'),
	Todo = mongoose.model('Todo');

exports.getAllTodos = function(req, res) {
  Todo.find({ }).sort({ 'createDate': 'descending' }).exec(function(err, allTodos) {
    if (err) {
      res.status(400).send(err);
    }

    res.status(200).json(allTodos);
  });
};

exports.getPendingTodos = function(req, res) {
  Todo.find({ 'status' : 'pending' }).sort({ 'createDate': 'descending' }).exec(function(err, allPendingTodos) {
    if (err) {
      res.status(400).send(err);
    }

    res.status(200).json(allPendingTodos);
  });
};

exports.createTodo = function(req, res) {
  var newTodo = new Todo(req.body);  
  
  newTodo.save(function(err, todo) {
    if (err) {
      res.status(400).send(err);
    }

    res.status(200).json(todo);
  });
};

exports.markCompleted = function(req, res) { 	    
  var todoId = req.body._id.toString() + "";	 
  Todo.findByIdAndUpdate({ _id: todoId }, { $set: { status: 'completed' }}, function(err, todo) {
    if(err){
      res.status(400).send(err);
    }    

    res.status(200).send(todo);	
  });
};