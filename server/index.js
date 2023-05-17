const express = require("express")
const app = express()
const authRoutes = require("./routes/authRoutes")
const profileRoutes = require("./routes/profileRoutes")
const passportSetup = require("./config/passportSetup")
const mongoose = require("mongoose")
const keys = require("./config/keys")
const cookieSession = require("cookie-session")
const passport = require('passport')

app.set('view engine','ejs')

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookiekey]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth',authRoutes)
app.use('/profile',profileRoutes)
app.get("/",(req,res)=>{
    res.render('home')
})

mongoose.connect(keys.mongoDB.dbURL)

app.listen(3000,()=>{
    console.log("server connected to 3000")
}) 