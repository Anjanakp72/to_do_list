var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* Get home page */
// router.get('/', function(req,res,next){
// 	res.send('Express RESTful API');
// });

/*  GET ALL TO DO LISTS */
router.get('/', function(req,res,next){
	User.find( function(err, lists){
		if(err) return next(err);
		res.json(lists);
	});
});

/* GET A PARTICULAR LIST BY ID */
router.get('/:id', function(req, res,next){
	User.findById(req.params.id, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//curl -i -X POST -H "Content-Type: application/json" -d '{ "srno":"1","title":"ToDo List 1","remarks": "First To Do List by Ashish","status":true }' localhost:3000/todolist
/* ADD A NEW LIST */
router.post('/', function(req,res,next) {
	User.create(req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

/* UPDATE A LIST */
router.put('/:id', function(req, res, next){
	User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});

/* UPDATE A LIST */
router.delete('/:id', function(req, res, next){
	User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
});


module.exports = router;