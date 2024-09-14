import { useState,useEffect} from 'react'
import seacrhIcon from "../../images/searchIcon.png"
import { Button } from "@/components/ui/button"
export default function Grooming(){
    const [prod,setProd]=useState([])
    const [prodType,setProdType]=useState(null)
    let token=localStorage.getItem('token')==null ? null : localStorage.getItem("token")

    function onclick(event){
        console.log(event.target.name)
        setProdType(event.target.getAttribute("name")) 
    }
    let showData=async (token)=>{
        let searchBar=document.getElementsByClassName("searchBar")[1]
        
        try{
            fetch(`http://localhost:5500/products/grooming?model=grooming&searchExp=${searchBar.value}`,{headers:{"Authorization":`Bearer ${token}`}})
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
    },[prodType])
    
    const sortedProd=prodType===null? prod: prod.filter((elem)=>{
        console.log("ye",prod,prodType)
        if(elem.productType==prodType){
            console.log(elem.productType,prodType)
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
        <div className='addCart flex justify-center items-center' id={elem._id} onClick={(obj)=>{
            
         
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
        <div className="searchBar flex justify-end flex-row">
            <input className='searchBar w-[20%] h-[30px] border-[2px] border-solid border-gray-500' type="text" />
            <img src={seacrhIcon} className="h-[28px]" alt="" onClick={showData}/>
        </div>
        <div className="container  w-[80px] h-3/5 fixed top-navbar_calc left-[28px] flex flex-col justify-evenly">

        

        <div className="Trimmer flex flex-col items-center" onClick={onclick} name="Trimmer">

            <img src="../images/wmIcon.png " className="shrink flex justify-center items-center w-[80%]" name="Trimmer"></img>
            <div className="trimmer_text flex justify-center items-center" name="Trimmer">Trimmer</div>
        
        </div>

        <div className="Hair Clipper flex flex-col justify-center items-center " onClick={onclick} name="Hair Clipper">

            <img src="../images/fridgeIcon2.png" className="shrink h-[80px] w-1/2 flex " name="Hair Clipper"></img>
            <div className="HairClipper_text flex justify-center items-center" name="Hair Clipper">Hair Clipper</div>

        </div>

        <div className="Bikini Trimmer flex flex-col items-center" onClick={onclick} name="Bikini Trimmer">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Bikini Trimmer"></img>
            <div className="BikiniTrimmer_text flex justify-center items-center" name="Bikini Trimmer">Bikini Trimmer</div>

        </div>

        <div className="Hair Straightener flex flex-col items-center" onClick={onclick} name="Hair Straightener">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Hair Straightener"></img>
            <div className="HairStraightener_text flex justify-center items-center" name="Hair Straightener">Hair Straightener</div>

        </div>
        <div className="Hair Dryer flex flex-col items-center" onClick={onclick} name="Hair Dryer">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="Hair Dryer"></img>
            <div className="HairDryer_text flex justify-center items-center" name="Hair Dryer">Hair Dryer</div>

        </div>
    </div>
    {prod_html}
    </div>
}