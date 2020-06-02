var mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

//var mongoURI = 'mongodb://localhost:27017/TodoApp';
//var mongoURI = 'mongodb://jx:jx9090@188.166.10.196:16018?authMechanism=SCRAM-SHA-1&authSource=TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODBJX_URI, {useNewUrlParser: true, useUnifiedTopology: true});


module.exports = {mongoose};