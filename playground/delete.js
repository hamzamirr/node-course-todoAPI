//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
db.collection('Users').findOneAndDelete({
    _id:new ObjectID('599bc46b9e32d550446e68bc')
}).then((result)=>{
    console.log(result);
});
    
    
//    db.close();
});