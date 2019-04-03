const cors = require("cors");

const runcmd = require("../routes/runcmd");
const xmlparser = require("express-xml-bodyparser");
const bodyParser = require("body-parser");


module.exports=(app)=>{
    app.use(cors());
    app.use(xmlparser());
    app.use(bodyParser.json({limit:"10mb",extended:true}));
    app.use(bodyParser.text({limit:"10mb",extended:true}));
    app.use("/api/runcmd",runcmd);

};