const User = require('../models/users');
const bcrypt = require('bcrypt');

function isStringInValid(string){
    if(string==undefined || string.length===0) return true;
    else return false;
}

exports.signupUsers = async (req, res, next)=>{
    try{   
    let {name, email, password} = req.body;
    const emailExists = await User.findOne({email: email});

    if(emailExists){
        return res.status(404).json('email should be unique');
    }

    if(isStringInValid(name) || isStringInValid(email) || isStringInValid(password)){
        return res.status(404).json('Something is Missing');
    }
    
        bcrypt.hash(password, 10, async(err, hash)=>{
        password = hash;
        if (err) {
            res.status(500).json({ message: "Something went wrong" });
        }
        else{
        await User.create({name: name, email: email, password: password});
        res.status(201).json('Successfully Registered');
        }
    })
}
    catch(error){
        console.log(error);
    }
}

exports.loginUsers = async(req, res, next)=>{
    try{
    const {email, password} = req.body;

    if(isStringInValid(email) || isStringInValid(password)){
        return res.status(404).json('Something is Missing');
    }

    const user = await User.findOne({email: email});

    if(!user){
        return res.status(404).json('User not registered');
    }

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result===false){
            return res.status(401).json('Password is not correct');
        }
        if(result===true){
            res.status(201).json({message:'Successfully logged in', token: user._id});
        }
    })
    }
    catch(err){
        console.log(err);
    }
}