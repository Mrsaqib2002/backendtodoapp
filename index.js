const app=require('./app');
const PORT = 4000; // Koi bhi free port number
// Routes  
app.get('/',(req,res)=>{
res.send('hai bilkol.........');
});

// Port 4000 pe server start karein
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});