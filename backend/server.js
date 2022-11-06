const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { readdirSync } = require('fs');

const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '20mb'}));
app.use(cors());

//Route
// localhost:3000/api
//#1
//app.use('/api', require('./routes/api'));

//#2
readdirSync('./routes').map((r)=> app.use('/api', require('./routes/'+r)));


const port = '3000';
app.listen(port,()=>{
    console.log('Server is running at http://localhost'+port);
})