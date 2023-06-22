import {Router} from 'express';
const router = Router();

import { Todo } from '../models/todo';

let todo: Todo[] =[];

router.get('/getTodo', (req, res, next)=>{
    res.status(200).json({todos:todo})
})

router.post('/postTodo', (req, res, next)=>{
    const newTodo: Todo ={
        id:new Date().toISOString(),
        text: req.body.text
    }
    todo.push(newTodo);
    res.status(200).json('successfuly added');
})

router.delete('/deleteTodo:id', (req, res, next)=>{
   todo = todo.filter(todoItem=>{todoItem.id!==req.params.id});
   res.json('deleted');
})

export default router;