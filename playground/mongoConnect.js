//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log('Connected to mongoDB server');
    
//    db.collection('Todos').insertOne({
//        text:'Something to do',
//        completed:false
//        
//    },(err,result)=>{
//        if(err){
//            return console.log('unable to insert to todo',err)
//        }
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });
    
//    db.collection('Users').insertOne({
//        name:'hamza mir',
//        age:'21',
//        location:'lahore, Pakistan'
//        
//    },(err,result)=>{
//        if(err){
//           return console.log('could not insert successfully',err);
//        }
//        console.log(result.ops[0]._id.getTimestamp());
//    });
    
    
    
    
    
    db.close();
});