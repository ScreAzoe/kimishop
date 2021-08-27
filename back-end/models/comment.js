'use strict'

var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var CommentSchema= Schema({
	email: String,
	comment: String
});

module.exports = mongoose.model('Comment', CommentSchema);
