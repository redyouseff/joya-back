const asyncHandler= require("express-async-handler");
const appError = require("../utils/apiError");
const OffPlanModel = require("../Models/OffPlanModel");


const createOffPlan=asyncHandler(async(req,res,next)=>{
    const data=await OffPlanModel.create(req.body);
    if(!data){
        return next(new appError("there is an error on creating offplan",400));
    }

    res.status(200).json({data:data})
})


const getAllOffPlan=asyncHandler(async(req,res,next)=>{
    const data=await OffPlanModel.find();
    if(!data){
        return next(new appError("there is an error on get the data",400));
    }

    res.status(200).json({data:data})
})

const getSpecificOffplan=asyncHandler(async(req,res,next)=>{
      
    const data=await OffPlanModel.findById(req.params.id)
    if(!data){
        return next(new appError(`there is no offplan by this id ${req.params.id}`,400));
    }

    res.status(200).json({data:data})

})


module.exports= {getSpecificOffplan,getAllOffPlan,createOffPlan}

