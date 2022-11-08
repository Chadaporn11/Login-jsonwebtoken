const { response } = require('express');
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try{
        const token = req.headers["authtoken"];

        if(!token){
            res.status(401).send('no token,authorization denied');
        }
        const decoded = jwt.verify(token,'jwtSecret');
        req.user = decoded.user;
        next();

    }catch(err){
        console.log(err);
        res.status(401).send('Token is invalid!');
    }
}

exports.adminCheck = async(req, res, next) => {
    try{
        const { username } = req.user;
        const adminuser = await User.findOne({ username }).exec();

        if(adminuser.role !== 'admin'){
            res.status(403).send(err,' Admin Access denied');
        } else {
            next();
        }

    }catch(err){
        console.log(err);
        res.status(401).send('Admin Access denied!');
    }
}