const { Router } = require("express");
const router = Router();

router.get('/cannabis',(req,res)=>{
    res.send('Cannabis')
})

module.exports =router;
