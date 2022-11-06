const express = require('express');
const router = express.Router();

//Route
router.get('/',(req,res)=>{
    res.send('Hello API');
})
router.get('/som',(req,res)=>{
    res.send('Hello API som');
})



module.exports = router