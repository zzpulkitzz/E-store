import { useState,useEffect} from 'react'
import { Button } from "@/components/ui/button"
export default function Battery(){
    const [prod,setProd]=useState([])
    const [prodType,setProdType]=useState('f')
    let token=localStorage.getItem('token')==null ? null : localStorage.getItem("token")

    function onclick(event){
        setProdType(event.target.name) 
    }
    let showData=async (token)=>{
        try{
            fetch("http://localhost:5500/products/battery?model=battery",{headers:{"Authorization":`Bearer ${token}`}})
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
    
    const sortedProd=prodType==='f'? prod: prod.filter((elem)=>{
  
        if(elem.applianceType==prodType){
            console.log("jbds")
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

        <div className="luminous flex items-center flex-col" onClick={onclick} name="Luminous">

        <img src="../images/tvIcon.png " className="shrink w-[80%]" name="Luminous"></img>
        <div className="_text flex justify-center items-center" name=""></div>

        </div>

        <div className="livguard flex flex-col items-center" onClick={onclick} name="Livguard">

            <img src="../images/wmIcon.png " className="shrink flex justify-center items-center w-[80%]" name="Livguard"></img>
            <div className="livguard_text flex justify-center items-center" name="Livguard">Livguard</div>
        
        </div>

        <div className="exide flex flex-col justify-center items-center " onClick={onclick} name="Exide">

            <img src="../images/fridgeIcon2.png" className="shrink h-[80px] w-1/2 flex " name="Exide"></img>
            <div className="exide_text flex justify-center items-center" name="Exide">Exide</div>

        </div>

        <div className="amar_raja flex flex-col items-center" onClick={onclick} name="Amar Raja">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Amar Raja"></img>
            <div className="amar_raja_text flex justify-center items-center" name="Amar Raja">Amar Raja</div>

        </div>

        <div className="Su-Kam flex flex-col items-center" onClick={onclick} name="Su-Kam">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Suk-Kam"></img>
            <div className="Su-Kam_text flex justify-center items-center" name="Su-Kam">Su-Kam</div>

        </div>
        <div className="Okaya flex flex-col items-center" onClick={onclick} name="Okaya">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Okaya"></img>
            <div className="Okaya_text flex justify-center items-center" name="Okaya">Okaya</div>

        </div>
    </div>
    {prod_html}
    </div>
}