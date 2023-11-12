const express=require("express");
const https=require("https");
const fs=require("fs");
const history=require("connect-history-api-fallback");
const jsonServer=require("json-server");
const bodyParser=require("body-parser");
const auth=require("./authMiddleware");
const router=jsonServer.router("serverdata.json");

const enableHttps=false;

const ssloptions={};

if(enableHttps){
    ssloptions.cert=fs.readFileSync("./ssl/sportstore.crt");
    ssloptions.key=fs.readFileSync("./ssl/sportstore.pem");
}

const app=express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api",router);
app.use(history);
app.use("/",express.static("./dist/SportStore"));

app.listen(80,()=>console.log("Htpp server running on port 80"));

if(enableHttps){
    https.createServer(ssloptions.app).listen(443,
        ()=>console.log("Https server running on port 443"));

}else{
    console.log("Https disabled");
}