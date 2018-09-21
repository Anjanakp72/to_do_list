module.exports.login = function(req, res) {

passport.authenticate('local', function(err, user, info){
	var token;

	// if passport throws an error
	if(err){
		res.status(404).json(err);
		return;
	}

	// if user data found
	if(user){
		token = user.generateJwt();
		res.status(200);
		res.json({
			"token": token
		});
	} else {
		// if user data not found
		res.status(401).json(info);		
	}
})(req, res);

};