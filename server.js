const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')
const app = express();


require('dotenv').config();

const usersRouter = require('./routes/users');


require('./config/database');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));



app.use('/routes/users', usersRouter)
// app.use('/route/posts', postRouter)
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});

