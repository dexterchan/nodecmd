const express = require("express");
const path = require("path");
const verboseLogger = require("debug")("app:verbose");
const router = express.Router();

const {execCmdGetOutput} = require("../backend/ExecuteCmdInterface");


router.get("/hello",(req,res)=>{
    res.status(200).send({result:"Hello world!"});
});

router.get("/execute",async(req,res)=>{


    const ex="helloworld";
    const inputpara=" abcd ";
    const outputpara=" -o ";

    const output=await execCmdGetOutput(ex,inputpara,outputpara);


    res.set("Content-Type","text/plain");
    res.send(output);
});


module.exports=router;
