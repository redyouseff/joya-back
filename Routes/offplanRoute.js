const express =require("express");
const router=express.Router();

const {getSpecificOffplan,getAllOffPlan,createOffPlan} =require("../Services/offplanService")


router.route("/").post(createOffPlan)
.get(getAllOffPlan)
router.route("/:id").get(getSpecificOffplan)


module.exports=router

