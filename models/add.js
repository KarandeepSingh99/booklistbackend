const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    
    title:{
        type:String
    },
    isbn:{
        type:String
    },
    author:{
        type:String
    },
    described:{
        type:String
    } ,
    publisheddate:{
        type:Date
    },
    publisher:{
        type:String
    }
})

mongoose.model("ADD", bookSchema)