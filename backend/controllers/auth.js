const bcrypt = require('bcryptjs');
const User = require('../models/user');

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