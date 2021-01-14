const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Item = require('./routes/api/items');
const app = express();
 //body parser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//mongo connection

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => console.log('Mongodb Connected'))
.catch( err =>console.log(err));
const port = process.env.port || 5000;

// USE ROUTES
app.use('/api/items',Item);
app.listen(port, ()=> console.log('server start at port &{port}')); 