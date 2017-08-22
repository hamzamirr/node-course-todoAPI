//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
    
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('599be41c9e32d550446e7013')
    },
    {
        $inc:{
            age:1
        }
    },
    {
        returnOrignal:false
    }).then((res)=>{
        console.log(res);
    })    
    
    
//    db.close();
});