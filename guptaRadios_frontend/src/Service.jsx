import {Link, redirect,Navigate,Form} from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export async function Loader({request}){
    
    let virtual_email=localStorage.getItem("virtual_email")
    let virtual_password=localStorage.getItem("virtual_password")
    let email=localStorage.getItem("email")
    let password=localStorage.getItem("password")
    let pathname=new URL(request.url).pathname   
    if(virtual_email!==email & 
    virtual_password!==password){
        console.log(email,password,virtual_email,virtual_password)
        return redirect(`/login?message=please login to continue&redirectTo=${pathname}`)
     }else{
        console.log("met")
     }
    return null
    
}

export default function Service(){
    const [submCheck,setSubCheck]=useState(false)
    function onclick(event){
        let serviceForm=document.getElementById("service_form")
        console.log("jbbj")
        event.preventDefault()
        let formDict={}
        let formData= new FormData(serviceForm)
        let formItrt=formData.entries()
        for(const [key,value] of formItrt){
            formDict[key]=value
        }
        console.log(formDict)
        let handleForm=async ()=>{
            console.log("here")
            try{
                let response =await fetch("http://localhost:5500/",{
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body: JSON.stringify(formDict)
                })
                console.log(response,"heyyyy")
                if(response.status===200){
                    setSubCheck(true)
                    document.getElementsByClassName("name_input")[0].classList.add("bg-blue-200")
                    document.getElementsByClassName("name_input")[0].classList.remove("bg-white")
                    document.getElementsByClassName("customer_id_input")[0].classList.add("bg-blue-200")
                    document.getElementsByClassName("customer_id_input")[0].classList.remove("bg-blue-white")
                    document.getElementsByClassName("bill_no_input")[0].    classList.add("bg-blue-200")
                    document.getElementsByClassName("bill_no_input")[0].    classList.remove("bg-blue-white")
                    document.getElementsByClassName("product_name_input")[0].classList.add("bg-blue-200")
                    document.getElementsByClassName("product_name_input")[0].classList.remove("bg-blue-white")
                }
            }
            catch(error){
                console.log(error)
                
            }
        }
        handleForm()
    }
    function onSetNew(){
        setSubCheck(false)
        document.getElementsByClassName("name_input")[0].value=""
        document.getElementsByClassName("customer_id_input")[0].value=""
        document.getElementsByClassName("bill_no_input")[0].value=""
        document.getElementsByClassName("product_name_input")[0].value=""
    }
    useEffect(()=>{
        let customerId=document.getElementsByClassName("customer_id_input")[0]
        customerId.focus()
        document.execCommand('insertText', false, "heythe")
    },[0])

    
    
    return <div>
        <div className="text-[35px] font-sans "><h1 className="inline ml-auto flex justify-center align-middle font-roboto font-extralight ">Demand A Repair / Complain</h1></div>
       
        <form id="service_form" className=" bg-blue-300 w-[55vw] h-form_calc ml-auto mr-auto pt-[5vh] pb-[5vh] pl-[4vw] pr-[4vw] form flex flex-col justify-between text-lg font-roboto shadow-lg" >

        <div className="name flex flex-row justify-between">
        <label className="name_label font-roboto" for="name">Name:</label>
        <input name="name" type="text" placeholder="Name" className="name_input bg-white text-inherit placeholder:text-black border-[1px] border-black placeholder:pl-[4px] placeholder:text-sm pl-[4px] font-roboto"></input></div>

        <div className="customer_id flex flex-row justify-between">
        <label className="customer_id_label" for="customerId">Customer Id:</label>
        <input name="customer_id" type="text" placeholder="Customer Id" className="customer_id_input bg-white text-inherit 
        placeholder:text-black border-[1px] border-black placeholder:pl-[4px] placeholder:text-sm pl-[4px] font-roboto "></input>
        </div>

        <div className="bill_no flex flex-row justify-between">
        <label className="bill_no_label" for="billNo">Bill No:</label>
        <input name="billNo" type="number" placeholder="Bill No." className="bill_no_input bg-white placeholder:text-black border-[1px] border-black placeholder:pl-[4px] placeholder:text-sm pl-[4px] font-roboto"></input>
        </div>

        <div className="product_name flex flex-row justify-between">
        <label for="productName" >Choose The Product:</label>
        <select id="product_name" name="productName" className="product_name_input bg-white border-[1px] border-black text-sm">
            <option value="refrigerator" className="">Refrigerator</option>
            <option value="TV" className="">TV</option>''
            <option value="washing machine" className="">Washing Machine</option>
            <option value="grooming_appliance" className="">Grooming Appliance</option>
        </select>
        </div>
        
        <div className="buttons bg-blue-600 w-[35%] ml-auto mr-auto rounded-md text-2xl font-thin h-[40px]">
        <button className="register " onClick={onclick} >Register</button>
         {submCheck==true? <div className="sub_new" onClick={onSetNew}>Register New</div>:null}
        </div>
        </form>
        <a href="https://api.whatsapp.com/send?phone=7310777296">Send Message</a>
    </div>}