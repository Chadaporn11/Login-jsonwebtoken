const bcrypt = require('bcryptjs');
const { response } = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

exports.register = async(req,res)=>{
    try{
        // Check User
        const { username, password } = req.body;
        var user = await User.findOne({ username});
        if(user){
            return res.status(400).send('User Already exists');
        }
        const salt = await bcrypt.genSalt(10);
        user = new User({
            username,
            password
        });

        // Encrypt Password
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        res.send('register success');


    }catch(err){
        console.log(err)
        res.status(500).send('Server error: ' + err.message);
    }
}

exports.login = async(req, res)=> {
    try {
        const { username, password } = req.body;
        var user = await User.findOneAndUpdate({ username}, {new: true});
        if(user && user.enabled){

            //Check Password
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).send('Password Invalid');
            }
            
            // Payload
            const payload = {
                user:{
                    username: user.username,
                    role: user.role
                }
            }
            // Generate Token
            jwt.sign(payload, 'jwtSecret', {expiresIn: 3600 },
            (err,token)=>{
                if(err) throw err;
                res.json({token,payload});
            });
        }else{
            return res.status(400).send('User not found!');
        }

    }catch(err){
        console.log(err);
        res.status(500).send('Server error: ' + err.message);
    }
}

exports.listUser = async(req,res)=>{
    try{
        res.send('list GET User');

    }catch(err){
        console.log(err)
        res.status(500).send('Server error: ' + err.message);
    }
}

exports.editUser = async(req,res)=>{
    try{
        res.send('Edit User');

    }catch(err){
        console.log(err)
        res.status(500).send('Server error: ' + err.message);
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        res.send('Delete User');

    }catch(err){
        console.log(err)
        res.status(500).send('Server error: ' + err.message);
    }
}