const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser= require("body-parser");
const { stringify } = require("querystring");

app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://jack:jack@cluster1.oswxoq9.mongodb.net/test?retryWrites=true&w=majority", {usenewurlparser:true},{useunifiedtopology:true}).then(()=>{
    console.log("connection");
}).catch((err)=>{
    console.log("not connected");
})

const notesSchema= {
    designation:String,
    name:String,
    email:String,
    phone:String,
    dateofbirth:String,
}

const note=mongoose.model("note",notesSchema);

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index/index1.html");
})

app.post("/", function(req,res){
    let newnote=new note({
            designation: req.body.designation,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            dateofbirth: req.body.dateofbirth
    });
    newnote.save();
    res.redirect("/");
})

app.listen(3000, function(){
    console.log('working1');
})