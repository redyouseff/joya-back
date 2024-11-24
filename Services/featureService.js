const asyncHandler= require("express-async-handler");
const appError = require("../utils/apiError");
const OffPlanModel = require("../Models/OffPlanModel");
const featureModel = require("../Models/featuresModel");





const createFeature=asyncHandler(async(req,res,next)=>{
    const data=await featureModel.create(req.body);
    if(!data){
        return next(new appError("there is an error on creating feature",400));
    }

    res.status(200).json({data:data})
})


const getAllFeature=asyncHandler(async(req,res,next)=>{
    const data=await featureModel.find();
    if(!data){
        return next(new appError("there is an error on get the data",400));
    }

    res.status(200).json({data:data})
})

const getSpecificFeature=asyncHandler(async(req,res,next)=>{
      
    const data=await featureModel.findById(req.params.id)
    if(!data){
        return next(new appError(`there is no feature by this id ${req.params.id}`,400));
    }

    res.status(200).json({data:data})

})



module.exports= {createFeature,getSpecificFeature,getAllFeature}


 