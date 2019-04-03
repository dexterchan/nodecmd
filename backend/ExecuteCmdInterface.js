const fs = require("fs-extra");
const verboseLogger = require("debug")("app:verbose");
const uuidv4 = require("uuid/v4");
const path = require("path");
const util = require("util");

const execFile = util.promisify(require('child_process').execFile);

const execCmd = async(ex,command,inputpara,outputpara)=>{
    const argument=[];
    argument[1]=inputpara;
    argument[2]=outputpara;
    verboseLogger("err:"+ex+" "+argument[1]+" " +argument[2]);
    
    
    try{
        const {error,stdout,stderr}=await execFile(ex,argument);
        if(error){
            throw new Error(error);
        }
        if(stderr){
            throw new Error(stderr);
        }
    }catch(ex){
        throw new Error(ex.message);
    }

}

const execCmdGetOutput = async(command,inputpara,output)=>{
    const ex=path.join(__dirname,"..","binary","HelloWorld.exe");
        
        const outputpara=path.join("c:/temp/",uuidv4()+".log");

       

        return new Promise(async (resolve,reject)=>{
            await execCmd(ex,inputpara,outputpara);
            try{
                
                verboseLogger(outputpara);
                fs.readFile(outputpara,(err,data)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(data.toString("utf8"));
                });
                
            }catch(ex){
                reject(ex);
            }

        });
        return "ok";
}


module.exports.execCmd=execCmd;
module.exports.execCmdGetOutput=execCmdGetOutput;