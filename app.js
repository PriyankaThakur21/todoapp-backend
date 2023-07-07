const express = require('express');
const app = express();
require("dotenv").config();

const cors = require('cors');
app.use(cors());

const mongoose=require('mongoose');

const UserRouter = require('./routers/users');
const TodoRouter = require('./routers/todo');

app.use(express.json());

app.use(UserRouter);
app.use(TodoRouter);

mongoose.connect(process.env.MONGODB)
.then((res)=>{
    app.listen(3000);
    console.log('connected')
}).catch((err)=>{
    console.log(err);
})

