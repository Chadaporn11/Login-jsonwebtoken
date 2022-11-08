const express = require('express');
const router = express.Router();

//controller
const { 
    register,
    login,
    listUser,
    editUser,
    deleteUser,
    currentUser, 
} = require('../controllers/auth');

//Middleware
const { auth, adminCheck } = require('../middleware/auth');


//End point http://localhost:4200/api/register
//Method: POST
//Access: public
router.post('/register',register);

//End point http://localhost:4200/api/login
//Method: POST
//Access: public
router.post('/login',login);

//End point http://localhost:4200/api/current-user
//Method: POST
//Access: private
router.post('/current-user', auth, currentUser);

//End point http://localhost:4200/api/current-admin
//Method: POST
//Access: private
router.post('/current-admin', auth, adminCheck, currentUser);


router.get('/1',auth,(req, res) => {
    res.send('hello 1')
})


//End point http://localhost:4200/api/auth
//Method: GET
//Access: public
router.get('/auth',listUser)

//Method: PUT
//Access: public
router.put('/auth',editUser);

//Method: DELETE
//Access: public
router.delete('/auth',deleteUser)



module.exports = router