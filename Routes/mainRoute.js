
const BlogRoute=require("./blogRoute")

const mainRoute=(app)=>{
    app.use("/blog",BlogRoute);

}

module.exports=mainRoute;