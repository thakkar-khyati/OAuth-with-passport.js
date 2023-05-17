const router = require("express").Router()

const authCheck = (req,res,next)=>{
    if(!req.user){
        
    }
}

router.get('/',(req,res)=>{
    res.send("you are logged in this is your dashboard, "+req.user.username)
})

module.exports = router