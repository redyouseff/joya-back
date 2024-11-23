
const BlogRoute=require("./blogRoute")
const OffplanRoute=require("./offplanRoute")

const mainRoute=(app)=>{
    app.use("/blog",BlogRoute);
    app.use("/offplan",OffplanRoute)

}

module.exports=mainRoute;