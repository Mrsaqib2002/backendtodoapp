const app=require('./app');
const PORT = 4000; // Koi bhi free port number
//mongodb conn
const db=require('./config/db');
//User model email ,password
const UserModel=require ('./model/user.model');

// Routes  
app.get('/',(req,res)=>{
res.send('hai bilkol.........');
  });

// Port 4000 pe server start karein
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});