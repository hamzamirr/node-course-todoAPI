var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');
var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo=new Todo({
  text:req.body.text,
  completed:req.body.completed
});
todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
  console.log(e);
})
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  });
},(e)=>{
  res.staus(400).send(e);
});




app.listen(3000,(err)=>{
  if(err){
   console.log(err);
 }else{
   console.log('listining on port 3000');
 }
});

module.exports={app};
