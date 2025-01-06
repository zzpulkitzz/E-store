const express=require("express")
require("dotenv").config()
let app=express()
let {connect,products}=require("./connect.js")
let con_func=async ()=>{
    try{
        
    await connect(process.env.USER_KEY)
    console.log("success")
    const result = await products.deleteMany({}); 
    console.log(result)
    
    }catch(err){
        console.log(err)
    }
}
con_func()


