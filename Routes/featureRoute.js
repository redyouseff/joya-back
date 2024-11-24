const express =require("express");
const router=express.Router();

const  {createFeature,getSpecificFeature,getAllFeature} =require("../Services/featureService")


router.route("/").post(createFeature)
.get(getAllFeature)
router.route("/:id").get(getSpecificFeature)


module.exports=router
