// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://admin:123456@localhost:27017&authSource=TodoApp', (err, client) => {
 if(err) {
     return console.log('Unable to connect to MongoDb server');
 }
 console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
 
//  db.collection('Todos').insertOne({
//      text: 'Something to do',
//      completed: false 
//  }, (err, result) => {
//     if(err){
//         return console.log('Unable to insert todo', err);
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));
//  });

    db.collection('Users').insertOne({
        name: 'Ravi',
        age: 35,
        location: 'Dubai',
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert User', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
 
 client.close();
});