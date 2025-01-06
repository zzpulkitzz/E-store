const express=require("express")
const app=express()
const cors=require("cors")
let {middleware,test}=require("./middleware.js")
let {routerAppliances,routerBatteries,routerElectricals,routerGrooming,routerCart}=require("./controllers/router")
let path=require('path')
const accountSid = 'ACde02a3edf45be23648f1f3df1fbd35cb';
const authToken = '58eb50ba35a8e9aea4dd5b19ad9215df';
const client = require('twilio')(accountSid, authToken);


const axios = require('axios');

require("dotenv").config()
let {connect,crate,complain,products,battery,grooming,electricals}=require("./connect")
const { type } = require("os")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use("/products",routerAppliances)
app.use("/products",routerElectricals)
app.use("/products",routerBatteries)
app.use("/products",routerGrooming)
app.use("/products",routerCart)
app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send("HEY JUDE")

})
app.use("/test",test)

app.post("/",async (req,res)=>{
    try{
    
        let createInstance= await complain.create(req.body)
        res.status(200).send("form submitted")
        
        
    }catch(error){
        console.log(error)
        res.status(500).send({msg:error})
    }    
})

app.get("/test",(req,res,next,err)=>{
    console.log("dbvhjbd",err)

})





  
app.get('/amazon-lookup', async (req, res) => {
    try {
      let model=products
      let data=await model.find({})
      res.status(200).json(data)
      

    
     
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.get("/populate",async (req,res)=>{
    try{
        global.data=await electricals.create(global.data)
        res.status(200).json(global.data)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

const asyncConnect=async ()=>{
    try{
        app.listen(5500,()=>{
            console.log("jude")
        })
        await connect(process.env.USER_KEY)
         
    }catch(error){
        console.log(error)
    }
}

   
asyncConnect()
