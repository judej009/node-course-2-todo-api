const {ObjectID} = require('mongodb'); 
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5ecc17164b551c1be939fbe6';

var id ='5ececafb0d5383145b425443';

// if (!ObjectID.isValid) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

// User.findById(id).then((User) => {
//     if (!User){
//         return console.log('Unable to find user');
//     }
//     console.log(JSON.stringify(User, undefined, 2));
// }).catch((e) => console.log(e));