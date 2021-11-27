const express = require('express');
// const Router = express.Router;
const app = express();

app.set('view engine', 'pug')
let userRouter = require('./routes/user');

//middleware
app.use('/',(req,res,next)=>{
    let today = new Date();
    if(today.getDay() === 0 || today.getDay() === 6){
        res.send("we are off today")
    }else{
        next();
    }
})
app.use('/',(req,res,next)=>{
    let today = new Date();
    if(today.getHours()>=9 && today.getHours()<=17){
        next();
    }else{
        res.send("we are not available now, Working hours between 9 am to 5 pm ")
    }
})


//routes
app.use('/',userRouter);

app.listen(3000,()=>console.log("App is now up and running"));
