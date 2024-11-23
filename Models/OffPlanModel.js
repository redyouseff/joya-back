const mongoose =require("mongoose");

const OffPlanShema=mongoose.Schema({

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
    paymentPlan:{
        description:{
            type:String
        }
    },
   

})

const OffPlanModel=mongoose.model("offplan",OffPlanShema)

module.exports=OffPlanModel;






