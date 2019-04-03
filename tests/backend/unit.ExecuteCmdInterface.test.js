const fs = require ("fs-extra");
const path = require("path");
const assert = require("assert");
const verboseLogger = require("debug")("app:verbose");
const {execCmd,execCmdGetOutput} = require("../../backend/ExecuteCmdInterface");


describe ("Test backend cmd",()=>{
    it("test Hello world", async()=>{
        const ex="helloworld";
        const inputpara=" abcd ";
        const outputpara=" -o ";

        const output=await execCmdGetOutput(ex,inputpara,outputpara);
        console.log(output);
        verboseLogger("Finish the exe");
    });
});