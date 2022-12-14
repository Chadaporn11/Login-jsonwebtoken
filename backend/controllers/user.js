const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

exports.listUsers = async (req, res) => {
    try {
        // Check user
        const user = await User.find({}).select('-password').exec();
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};

exports.readUsers = async (req, res) => {
    try {
        // Check user
        const id = req.params.id;
        const user = await User.findOne({_id:id}).exec();
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};

exports.updateUsers = async (req, res) => {
    try {
        // Check user
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};

exports.removeUsers = async (req, res) => {
    try {
        // Check user
        const id = req.params.id;
        const user = await User.findOneAndDelete({_id:id});
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};

exports.changeStatus = async (req, res) => {
    try {
        // Check 
        console.log(req.body);
        const user = await User.findOneAndUpdate(
            {_id:req.body.id},
            {enabled: req.body.enabled}
            );
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};

exports.changeRole = async (req, res) => {
    try {
        // Check 
        console.log(req.body);
        const user = await User.findOneAndUpdate(
            {_id:req.body.id},
            {role: req.body.role}
            );
        res.send(user);

    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error!");
    }
};
