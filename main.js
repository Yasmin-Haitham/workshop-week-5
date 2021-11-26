const express = require('express');
// const Router = express.Router;
const app = express();

app.set('view engine', 'pug')
let userRouter = require('./routes/user');

//middleware
app.use('/',(req,res,next)=>{
    let today = new Date();
    if(today.getDay() === 5 || today.getDay() === 6){
        next();
    }else{
        res.send("we are off today")
    }
})

//routes
app.use('/',userRouter);

app.listen(3000,()=>console.log("App is now up and running"));
