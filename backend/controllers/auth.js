

exports.register = async(req,res)=>{
    try{
        res.send(req.body.username);

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