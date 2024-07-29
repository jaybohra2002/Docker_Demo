const express=require('express');
const app=express();
app.use('/home',(req,res)=>{
    res.json({message:"OK"});
})
app.listen(3002,()=>{
    console.log('server is running on port 3002');
})