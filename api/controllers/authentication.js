var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req,res) {
	var user = new User();

	user.name = req.body.name;
	user.email = req.body.email;

	user.setPassword(req.body.password);
	user.save(function(err){
		var token;
		token = user.generateJwt();
		res.status(200);
		res.json({
			"token": token
		});
	});
};

module.exports.login = function(req, res){
	passport.authenticate('local', function(err,user,info){
		var token;

		// if passport throws an error
		if(err){
			res.status(404).json(err);
			return;
		}

		// if a user is found 
		if(user){
			token = user.generateJwt();
			res.status(200);
			res.json({
				"token": token
			});
		} else {
			// if  user is not found 
			res.status(401).json(info);	
		}
	})(req,res);
};

