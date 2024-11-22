const express =require("express");
const router=express.Router();

const {createBlog,getAllBlogs,getSpecificBlog} =require("../Services/blogService")


router.route("/").post(createBlog)
.get(getAllBlogs)
router.route("/:id").get(getSpecificBlog)


module.exports=router

