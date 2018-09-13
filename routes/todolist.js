var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TodoList = require('../models/TodoList.js');

/* Get home page */
// router.get('/', function(req,res,next){
// 	res.send('Express RESTful API');
// });

/*  GET ALL TO DO LISTS */
router.get('/', function(req,res,next){
	TodoList.find( function(err, lists){
		if(err) return next(err);
		res.json(lists);
	});
});

/* GET A PARTICULAR LIST BY ID */
router.get('/:srno', function(req, res,next){
	TodoList.findById(req.params.srno, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//curl -i -X POST -H "Content-Type: application/json" -d '{ "srno":"1","title":"ToDo List 1","remarks": "First To Do List by Ashish","status":true }' localhost:3000/todolist
/* ADD A NEW LIST */
router.post('/', function(req,res,next) {
	TodoList.create(req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

/* UPDATE A LIST */
router.put('/:id', function(req, res, next){
	TodoList.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

/* UPDATE A LIST */
router.delete('/:id', function(req, res, next){
	TodoList.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});


module.exports = router;