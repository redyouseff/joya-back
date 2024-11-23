const asyncHandler= require("express-async-handler");
const BlogModel =require("../Models/BlogModel");
const appError = require("../utils/apiError");


const createBlog=asyncHandler(async(req,res,next)=>{
    const blog=await BlogModel.create(req.body)
    if(!blog){
        return next(new appError("there is an error on creating feedback",400));
    }
    res.status(200).json({data:blog})
})

const getAllBlogs=asyncHandler(async (req,res,next)=>{
    const blog=await BlogModel.find();
    if(!blog){
        return next(new appError("there is no blog ",400));
    }
    res.status(200).json({data:blog})
})

const getSpecificBlog=asyncHandler(async(req,res,next)=>{
    const blog=await BlogModel.findById(req.params.id);
    if(!blog){
        return next (new appError (`there is no blog for this id ${req.params.id}`,400));
    }
    res.status(200).json({data:blog})
})




module.exports= {createBlog,getAllBlogs,getSpecificBlog}