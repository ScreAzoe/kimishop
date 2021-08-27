'use strict'

var express= require('express');

var CommentController= require('../controllers/comment');

var router = express.Router();

router.get('/home', CommentController.home);

router.post('/test', CommentController.test);

router.post('/saveComment', CommentController.saveComment);

router.get('/comment/:id?', CommentController.getComment);

router.get('/comments', CommentController.getComments);

module.exports= router;


