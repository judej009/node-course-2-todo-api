// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://admin:123456@localhost:27017/TodoApp', { useUnifiedTopology: true }, (err, client) => {
 if(err) {
     return console.log('Unable to connect to MongoDb server');
 }
 console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')
 
db.collection('users').find({
    _id: new ObjectID('5ecc17164b551c1be939fbe6')
}).toArray().then((docs) => {
    console.log('users');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch Users', err);
});  
 
// db.collection('Todos').find({}).count().then((count) => {
//     console.log(`Todos count: ${count}`);
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({name: 'Jude'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
});
//  client.close();
});