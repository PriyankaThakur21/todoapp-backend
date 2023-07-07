const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/todo');

router.post('/addtodo/:userid', TodoController.addtodo);

router.get('/gettodo/:userid', TodoController.gettodo);

module.exports = router;