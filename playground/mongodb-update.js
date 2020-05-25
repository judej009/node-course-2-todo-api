// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if(err) {
     return console.log('Unable to connect to MongoDb server');
 }
 console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5ecbd7134a48bcd9b7e37cf8')
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// })

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ecad2139901580dc5ae7c07')
}, {
    $set: {
        name: 'Jude'
    },$inc: { age: 1}
    },{
        returnOriginal: false
    }
    ).then((result) => {
        console.log(result);
})

//  client.close(); 
});