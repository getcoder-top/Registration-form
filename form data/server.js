const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const bodyparser= require("body-parser");



app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://jack:jack@cluster1.oswxoq9.mongodb.net/test?retryWrites=true&w=majority", {usenewurlparser:true},{useunifiedtopology:true}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("not connected")
})



const notesSchema={
    designation:String,
    name:String,
    email:String,
    phone:String,
    dateofbirth:String,

}

const note=mongoose.model("note",notesSchema);

app.get('/',(req,res)=>{
    note.find({},function(err,notes){
        res.render("index",{
            notesfile: notes
        })
    })
})

app.listen(4000, function(){
    console.log('working1');
})