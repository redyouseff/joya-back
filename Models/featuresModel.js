const mongoose =require("mongoose");

const featureSchema=mongoose.Schema({

    title:{
        type:String,
        required:[true,"tittle is required"]

    },
    description:{
        type:String

    },
    details:String,
    imgSrcs:[String]
    ,
    agent:{
        name:String,
      image: String,
      phone: String,
      whatsapp: String,
    }   
   
   

})

const featureModel=mongoose.model("feature",featureSchema)

module.exports=featureModel;






