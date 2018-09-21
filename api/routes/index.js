var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var TodoList = require('../models/TodoList.js');

var auth = jwt({
	secret: 'loginDemoSecretKey',
	userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlToDoList = require('../controllers/todolist');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//get to do lists
router.get('/getalltodolists', auth, ctrlToDoList.getAllToDoLists);
router.get('/getlistdetail/:id', auth, ctrlToDoList.getlistdetail);
router.post('/createlist', auth, ctrlToDoList.createlist);
router.put('/updatelist/:id', auth, ctrlToDoList.updatelist);
router.delete('/deletelist/:id', auth, ctrlToDoList.deletelist);

module.exports = router;

