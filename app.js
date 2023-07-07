const express = require('express');
const app = express();
require("dotenv").config();

const cors = require('cors');
app.use(cors());

const mongoose=require('mongoose');

const mongoConnect = require('./database').mongoConnect;
const UserRouter = require('./routers/users');

app.use(express.json());

app.use(UserRouter);

mongoose.connect(process.env.MONGODB)
.then((res)=>{
    app.listen(3000);
    console.log('connected')
}).catch((err)=>{
    console.log(err);
})

