//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
db.collection('Users').find({name:'hamza mir'}).toArray().then((doc)=>{
    console.log('Array:')
    console.log(JSON.stringify(doc,undefined,2));
},(err)=>{
    if(err){
        console.log('could not connect to the database');
    }
})
    
    
    
//    db.close();
});