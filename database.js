const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = callback =>{
    MongoClient.connect('mongodb+srv://priyanka:218priya@cluster0.2tcvgne.mongodb.net/todoapp?retryWrites=true&w=majority')
    .then(client=>{
        console.log('connected');
        db = client.db();
        callback(client);
    })
    .catch(err=>{
        console.log(err);
    })
}

const getDb = ()=> {
    if(db){
        return db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;