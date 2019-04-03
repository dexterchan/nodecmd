const express=require("express");

const app = express();


require("./startup/route")(app);

const port = process.env.PORT||3000;

app.get("/hello",(req,res)=>{
    res.status(200).send({result:"Hello world!"});
});

app.listen(port,()=>console.log(`listening to port ${port}...`));