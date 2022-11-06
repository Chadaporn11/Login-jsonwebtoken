const express = require('express');
const core = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();




const port = '3000';
app.listen(port,()=>{
    console.log('Server is running at http://localhost'+port