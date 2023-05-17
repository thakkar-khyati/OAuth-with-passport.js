const express = require("express")
const router = express.Router()
const passport = require("passport")

//login page
router.get('/login',(req,res)=>{
    res.render('login')
})


//login with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))


router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    //res.send(req.user)
    res.redirect('/profile/')
})

//logout
router.get('/logout',(req,res)=>{
    res.send("logout done")
})


module.exports = router