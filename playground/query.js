const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

var id='599c4095abb3843008ef09cf';
if(ObjectID.isValid(id)){
User.findById(id).then((user)=>{
  if(!user){
    return console.log('no user found');
  }
  console.log('user found\n\n',user);
});
}else{
  console.log('id not valid!');
}
