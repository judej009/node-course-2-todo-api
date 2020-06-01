const {ObjectID} = require('mongodb'); 

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result); 
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id:'5ed553b1792aa30d490ab18f'}).then((todo) => {

// });

Todo.findByIdAndRemove('5ed553b1792aa30d490ab18f').then((todo) => {
    console.log(todo)
});