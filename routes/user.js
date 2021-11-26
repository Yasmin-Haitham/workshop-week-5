const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/homepage',(req,res)=>{
    res.render('homepage')
})

router.get('/ourservices',(req,res)=>{
    res.render('ourServices')
    })

router.get('/contactus',(req,res)=>{
    res.render('contactUs')
    })
module.exports = router;