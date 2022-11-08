const express = require('express');
const router = express.Router();

//controller
const { 
    listUsers,
    readUsers,
    updateUsers,
    removeUsers,
    changeStatus

} = require('../controllers/user');


//Middleware
const { auth, adminCheck } = require('../middleware/auth');


//End point http://localhost:4200/api/users
//Method: GET
//Access: private
router.get('/users',auth, adminCheck, listUsers);

//End point http://localhost:4200/api/change-status
//Method: POST
//Access: private
router.post('/change-status',auth, adminCheck, changeStatus);

//End point http://localhost:4200/api/users/:id
//Method: GET
//Access: public
router.get('/users/:id', readUsers);

//End point http://localhost:4200/api/users/:id
//Method: PUT
//Access: public
router.put('/users/:id', updateUsers);

//End point http://localhost:4200/api/users/:id
//Method: DELETE
//Access: public
router.delete('/users/:id', removeUsers);

module.exports = router;