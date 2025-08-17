const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

const data= new mongoose.Schema({
    name: String,
    email: String,
    password: Number,
    cpassword: Number

})
const db=mongoose.connect("mongodb://localhost:27017/student")
if(db){
    console.log("connected")
}
else{
    console.log("not connected")
}
const newData=mongoose.model("signup",data)

app.post("/signup",async(req,res)=>{
    const value= await newData.create(req.body)
    res.json(value)
})
app.post("/login",async(req,res)=>{
    const{username,password}=req.body
    const log=await newData.findOne({name:username})
    if(log){
        if(log.password==password){
            res.json("success")
        }
        else{
            res.json("failure")
        }
    }
    else{
        res.json("fail")
    }

})
app.listen("5000",()=>{
    console.log("running")
})