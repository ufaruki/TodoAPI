'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'    
  },
  dueDate: {
    type: Date,
    required: false    
  },
  createDate: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('Todo', TodoSchema);