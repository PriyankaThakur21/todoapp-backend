const todolist = require('../models/todo');

exports.addtodo = async(req, res, next)=>{
    try{
const {name, description} = req.body;
const userid = req.params.userid;
console.log(req.params.userid)
await todolist.create({
      name: name,
      description: description,
      userid: userid
    });
    res.status(201).json('Successfuly added')
}
catch(err){
    console.log(err);
    res.status(400).json('something went wrong');
}
}

exports.gettodo = async(req, res, next)=>{
    try{
        const userid = req.params.userid;
        console.log(userid)
        const data = await todolist.find({userid: userid});
        console.log(data);
        res.status(201).json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).json('Something went wrong');
    }
}

    exports.updatetodo = async(req, res, next)=>{
        try{
            const id = req.params.todoid;
            const todo = await todolist.findOne({_id: id});
            console.log(todo);
            await todo.updateOne({ isDone: true } );
            res.status(200).json('updated');
        }
        catch(err){
            res.status(400).json('Something went wrong');
            console.log(err);
        }
    }

    exports.deletetodo = async(req, res, next)=>{
        try{
            const id = req.params.todoid;
            const todo = await todolist.findOne({_id: id});
            console.log(todo);
            await todo.deleteOne();
            res.status(200).json('deleted');
        }
        catch(err){
            res.status(400).json('Something went wrong');
            console.log(err);
        }
    }