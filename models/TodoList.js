var mongoose = require('mongoose');

var TodoListSchema = new mongoose.Schema({
	srno: Number,
	title: String,
	remarks: String,
	status: String,
	items: [{listno: Number, todoCaption: String}],
	createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TodoList', TodoListSchema);
