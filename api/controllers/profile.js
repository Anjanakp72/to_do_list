var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports.profileRead = function(req,res){

	// If no user ID exists in the JWT return 401 error
	if(!req.payload._id){
		res.status(401).json({
			"message": "Unauthorized Access: Private profile"
		});
	}else{
		User.findById(req.payload._id).exec(function(err, user){
			res.status(200).json(user);
		});
	}
};