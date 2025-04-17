const mongoos=require ('mongoose');
const connection =mongoos.createConnection('mongodb://localhost:27017/newtodo').on
('open',()=>{
console.log('Mongodb connected');

}).on('error',()=>{
console.log('mongodb connection error');
});
module.exports=connection;