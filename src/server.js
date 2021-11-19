const express = require('express')
const app = express();
const mongoose = require('mongoose')

app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

const routes = require('./routes.js')
const User = require('./models/UserModel.js')
const students = [{"photo":"https://robohash.org/Андрей","mark":3,"isDonePr":true,"_id":"6195578e99bd59276935f57b","name":"Андрей","group":"РПЗ 18 2/9","__v":0},{"photo":"https://robohash.org/fdgdf5345345","mark":0,"isDonePr":false,"_id":"61955e9799bd59276935f580","name":"hh","group":"RPZ 18 2/9","__v":0}];

mongoose.connect('mongodb://localhost:27017/users_db')

routes(app)

app.listen(3000)