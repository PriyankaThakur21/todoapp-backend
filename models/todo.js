const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todolist=new Schema(
{
    name:{
        type:String
    },
    description:{
        type:String
    },
    isDone:{
        type:Boolean,
        default: false
    },
    userid: {
        type: Schema.Types.ObjectId
    }
})
module.exports=mongoose.model('todolist',todolist);