const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const User=require("../models/user")
// const User=require("../models/user")
const USER=mongoose.model("USER")
const ADD=mongoose.model("ADD")


router.get("/",(req,res)=>{
    res.send("Hello");
})


router.post("/register",async (req,res)=>{
    const {username,password,confirmpassword}=req.body

    if (!username || !password || !confirmpassword) {
        res.send({ message: "Please add all the fields" })
    }
    USER.findOne( { username: username } ).then((savedUser) => {
        if (savedUser) {
            res.send({ message: "User already exist with that userName" })
        }
       
            const user = new USER({
               username,
               password,
               confirmpassword
            })

            user.save()
                .then(user => { res.json({ message: "Congratulations!!! Registered successfully" }) })
                .catch(err => { console.log(err) })
       
    })

   
})

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
       res.send({ message: "Please add username and password" })
    }
    USER.findOne({ username: username }).then((savedUser) => {
        if (!savedUser) {
            res.send({ message: "Invalid username or Not Registered" })
        } else {
              if(password===savedUser.password){
                res.send({message:"Login Successfull"})
              }else {
                res.send({message:"Password DidNot Match"})
              }
        }
      
        
    })
})

router.post("/add", (req,res)=>{
 
 const {title,isbn,author,described,publisheddate,publisher}=req.body;
 if(!title || !isbn || !author || !described || !publisheddate || !publisher){
    res.send({ message: "Please add all fields" })
 }

    const add = new ADD({
        title,
        isbn,
        author,
        described,
        publisheddate,
        publisher
       })
      
       add.save()
           .then(add => { res.json({ message: "Congratulations!!! Book Added successfully" }) })
           .catch(err => { console.log(err) })
 


})



router.get("/view",async(req,res)=>{

    try{

        const getBook=await ADD.find()
        console.log(getBook)
       // res.send({ message: "Book will now be shown" })

    }catch(e){
          console.log(e)
    }

})


module.exports=router;