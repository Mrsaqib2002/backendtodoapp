const mongoos=require('mongoose');
const db =require ('../config/db');
const {Schema}=mongoos;
const userSchema=new Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    }
});
const  UserModel =db.model('user',userSchema);
module.exports=UserModel;