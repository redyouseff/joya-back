const mongoose =require("mongoose");

const blogShema=mongoose.Schema({

    title:{
        type:String,
        required:[true,"tittle is required"]

    },
    image:{
        type:String

    },
    description:{
        type:String,
    }
    ,
    author:String,
    views:Number,
    date:String

})

const BlogModel=mongoose.model("blog",blogShema)

module.exports=BlogModel






