var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

// list all todos
router.get('/', function (req, res) {
  Todo.find(function (err, todos){
    if (err) throw err;
    res.json( todos );
  });
});

// add todo 
router.post('/', function (req, res) {
  // create with singular todo
  Todo.create({ title : req.body.title }, function (err, todo) {
    if (err) throw err;
    res.json( todo );
  });
});

// delete todo
router.delete('/:id', function (req, res) {
  Todo.remove(req.params.id, function (err, todo) {
    if (err) throw err;
    res.json( todo ); // this is the todo that was removed
  });
});

// complete todo
router.put('/:id/complete', function (req, res) {
  Todo.update(req.params.id,
   {
    $set : {
      completed : true
    }
   }, function ( err, todo) {
    if (err) throw err;
    res.json( todo );  // this is the todo that was updated
   });
});

// uncomplete todo
router.put('/:id/uncomplete', function (req, res) {
  Todo.update(req.params.id,
   {
    $set : {
      completed : false
    }
   }, function ( err, todo) {
    if (err) throw err;
    res.json( todo );  // this is the todo that was updated
   });
});

module.exports = router;