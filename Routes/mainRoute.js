
const BlogRoute=require("./blogRoute")
const OffplanRoute=require("./offplanRoute")
const FeatureRoute=require("./featureRoute")

const mainRoute=(app)=>{
    app.use("/blog",BlogRoute);
    app.use("/offplan",OffplanRoute)
    app.use("/feature",FeatureRoute)

}

module.exports=mainRoute;