import { useState,useEffect} from 'react'
import { Button } from "@/components/ui/button"
export default function Grooming(){
    const [prod,setProd]=useState([])
    const [prodType,setProdType]=useState(null)
    let token=localStorage.getItem('token')==null ? null : localStorage.getItem("token")

    function onclick(event){
        setProdType(event.target.name) 
    }
    let showData=async (token)=>{
        try{
            fetch("http://localhost:5500/products/grooming?model=electricals",{headers:{"Authorization":`Bearer ${token}`}})
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                console.log(response)
                setProd(response)
            })
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        let token=localStorage.getItem("token")
        console.log(token)
        showData(token)
    },[0])
    
    const sortedProd=prodType===null? prod: prod.filter((elem)=>{
  
        if(elem.productType==prodType){
            console.log(elem.applianceType,prodType)
            return elem
        }
    })
    console.log(sortedProd)
   


    const prod_html=sortedProd===undefined? undefined:sortedProd.map((elem)=>{
        return <div key={elem._id} className="card h-[27vh] w-[calc(100%-5px)] ml-[5px] flex flex-row p-0 border border-black">
        <div className="image_background h-full  h-[27%] w-[30%] p-3">
        <img src={elem.imageUrl} alt="" className="product_image  h-full w-full" />
        </div>
        
        <div className="product_text flex flex-col justify-around w-[50%]">

        <div className="product_name font-oswald text-xl font-medium text-black  ">{elem.name}</div>
        <div className="price font-serif text-xl">{`₹${elem.price}-/`}</div>
        <div className="product_warranty font-serif text-[15px]">{`Company Name:${elem.companyName}`}</div>
        <div className="product_delivery font-serif text-[15px]">{`Delivery charge:${elem.delivery}`}</div>

        </div>
        <div className='addCart flex justify-center items-center' id={elem._id} onClick={()=>{
           
            fetch(`http://localhost:5500/products/cart?id=${elem._id}`,{
                headers:{"Authorization":`Bearer ${token}`,
                "Content-Type": "application/json"},
                method:"POST",
                body:JSON.stringify(elem),    

                })
            .then((response)=>{
                console.log(response)
                if (response.status==200){
                    console.log("Success")
                }
                
            })
        }}>
            <Button id={elem._id}>Add To Cart</Button>
        </div>

    </div>
    
    })
    return <div className="pl-[calc(80px+28px)]">
        <div className="container  w-[80px] h-3/5 fixed top-navbar_calc left-[28px] flex flex-col justify-evenly">

        

        <div className="Plug flex flex-col items-center" onClick={onclick} name="Plug">

            <img src="../images/wmIcon.png " className="shrink flex justify-center items-center w-[80%]" name="Plug"></img>
            <div className="Plug_text flex justify-center items-center" name="Plug">Livguard</div>
        
        </div>

        <div className="Socket flex flex-col justify-center items-center " onClick={onclick} name="Socket">

            <img src="../images/fridgeIcon2.png" className="shrink h-[80px] w-1/2 flex " name="Socket"></img>
            <div className="Socket_text flex justify-center items-center" name="Socket">Socket</div>

        </div>

        <div className="LED flex flex-col items-center" onClick={onclick} name="Bikini Trimmer">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="LED Bulb"></img>
            <div className="LEDBulb_text flex justify-center items-center" name="LED Bulb">LED Bulb</div>

        </div>

        <div className="Wire flex flex-col items-center" onClick={onclick} name="Wire">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Wire"></img>
            <div className="Wire_text flex justify-center items-center" name="Wire">Wire</div>

        </div>
        <div className="Extension Board flex flex-col items-center" onClick={onclick} name="Extension Boardr">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Extension Board"></img>
            <div className="Extension Board_text flex justify-center items-center" name="Extension Board">Extension Board</div>

        </div>
    </div>
    {prod_html}
    </div>
}