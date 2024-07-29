const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use('/home',(req,res)=>{
    res.json({message:"OK"});
})
app.listen(process.env.PORT,()=>{
    console.log(`server is ruinng on port: ${process.env.PORT}`);
})