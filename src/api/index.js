'use strict';

var express = require('express');
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');
var router = express.Router();

router.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos){
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: err.message
      });
    }

    res.json({ todos: todos });
  });
});

router.post('/todos', function (req, res) {
  var todo = req.body;
  Todo.create(todo, function (err, todoRes) {
    if (err) {
      console.error("Error adding todo");
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Created!'});
  });
});

router.put('/todos/:id', function (req, res) {
  var id = req.params.id;
  var todo = req.body;

  if (todo && todo._id !== id) {
    return res.status(500).json({err: 'Ids do not match'});
  }
  Todo.findByIdAndUpdate(id, todo, function (err, todoRes) {
    if (err) {
      console.error("Error updating todo");
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Updated!'});
  });
});

//TODO: Add DELETE route to remove entries

module.exports = router;
