var mongoose = require('mongoose');

var TodoList = require('../models/TodoList.js');

module.exports.getAllToDoLists = function(req,res){

	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private profile"
		});
	}else{
		TodoList.find().exec(function(err, lists){
			res.status(200).json(lists);
		});
	}
};

module.exports.getlistdetail = function(req,res){
	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private Information"
		});
	}else{		
		TodoList.findById(req.params.id).exec(function(err, listdata){
			res.status(200).json(listdata);
		});
	}
};


module.exports.createlist = function(req,res, next){
	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private Information"
		});
	}else{		
		TodoList.create(req.body, function(err, post){
			if(err) return next(err);
			res.json(post);
		});
	}
};

module.exports.updatelist = function(req,res, next){
	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private Information"
		});
	}else{		
		TodoList.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
			res.status(200).json(post);
		});
	}
};

module.exports.deletelist = function(req,res){
	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private Information"
		});
	}else{		
	TodoList.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if(err) return next(err);
		res.json(post);
	});
	}
};
