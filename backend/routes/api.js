const express = require('express');
const router = express.Router();

//controller
const { register,listUser,editUser,deleteUser } = require('../controllers/auth');

//End point http://localhost:3000/api/auth
//Method: GET
//Access: public
router.get('/auth',listUser)

//Method: POST
//Access: public
router.post('/auth',register);

//Method: PUT
//Access: public
router.put('/auth',editUser);

//Method: DELETE
//Access: public
router.delete('/auth',deleteUser)



module.exports = router