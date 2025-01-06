const {connect,crate,products,grooming,electricals, battery,cart}=require("../connect")
let wrapper=require("./trycatchwrapper")
const mongoose=require("mongoose")
const jwt =require("jsonwebtoken")
const { ComplianceRegistrationInquiriesListInstance } = require("twilio/lib/rest/trusthub/v1/complianceRegistrationInquiries")

let get_func=wrapper(async (req,res)=>{
    let searchExp=req.query.searchExp
    let searchAlgo=searchExp===undefined? {}:{
        $or: [
            { name: {$regex:`${searchExp}`} },
            { delivery: {$regex:`${searchExp}`} },
            {productType:{$regex:`${searchExp}`}},
            {companyName:{$regex:`${searchExp}`}}
        
          ]
    }
    let model
    console.log(req.query.model)
    switch(req.query.model){
        case "battery":
            model=battery
            break
        case "electricals":
            model=electricals
            break
        case "grooming":
            model=grooming
            break
        case undefined:
            model=products
            break
        

    }
    console.log(model)
    let product= await model.find(searchAlgo).collation({ locale: 'en', strength: 2 }).sort({ name: 1 }).exec()

    
    res.status(200).json(product)


})
let get_id_func=(req,res)=>{
    let {id}=req.params
    res.status(200).send(`About page name with id :${id}`)
}

let post_func=async (req,res)=>{
    try{
        const token=jwt.sign({id:req.body.name},process.env.secretKey)
        console.log("",token)
        let product=await products.create(req.body)
        res.status(200).json(product)
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}

let put_func=async (req,res)=>{
    try{
        let {_id}=req.body
        console.log(_id)
        let postedData=await products.findOneAndUpdate({_id:_id},req.body)
        
        res.send(postedData)
    }catch(err){
        console.log(err)
    } 
    
    
}
let delete_id_func=async (req,res)=>{
    let {id}=req.params
    console.log(id)
    await products.deleteOne({ _id: id });
}
let get_cart_func=async(req,res)=>{
    console.log("gett")
    try{
        let cart_items=await cart.find({})
        res.status(200).json(cart_items)
    }catch(err){
        res.send(err)
    }
}

let post_cart_func=async(req,res)=>{
    console.log("post")
    try{
        let item={...req.body,quantity:1}
        let cart_item=await cart.create(item)
        console.log(cart_item)
        res.status(200).json(cart_item)
    }catch(err){
        res.send(err)
    }
   
}
module.exports={get_func,get_id_func,post_func,put_func,delete_id_func,get_cart_func,post_cart_func}
console.log("jnjh")