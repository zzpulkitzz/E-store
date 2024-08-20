import { useState,useEffect} from 'react'
export default function Appliance(){
    const [prod,setProd]=useState([])
    const [prodType,setProdType]=useState('f')
    function onclick(event){
        setProdType(event.target.name) 
    }
    let showData=async (token)=>{
        try{
            fetch("http://localhost:5500/products/appliances",{headers:{"Authorization":`Bearer ${token}`}})
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                console.log(response)
                setProd(response.product)
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
        console.log("here")
        console.log(elem['applianceType'])
        if(elem.applianceType==prodType){
            return elem
        }
    })
    console.log(sortedProd)
   


    const prod_html=
        sortedProd.map((elem)=>{
        return <div key={elem._id} className="card h-[27vh] w-[calc(100%-5px)] bg-blue-200 ml-[5px] flex flex-row p-0 border border-black">
        <div className="image_background h-full bg-blue-100 h-[27%] w-[30%] p-3">
        <img src="../../images/oven.png" alt="" className="product_image bg-blue-200 h-full w-full" />
        </div>
        
        <div className="product_text flex flex-col justify-around" >

        <div className="product_name font-oswald text-xl font-medium text-black  ">{elem.name}</div>
        <div className="price font-serif text-xl">{`₹${elem.price}-/`}</div>
        <div className="product_warranty font-serif text-[15px]">{`Warranty Period:${elem.warranty}`}</div>
        <div className="product_delivery font-serif text-[15px]">{`Delivery charge:${elem.delivery}`}</div>

        </div>

    </div>
    
    })
    return <div className="pl-[calc(80px+28px)]">
        <div className="container bg-blue-200 w-[80px] h-3/5 fixed top-navbar_calc left-[28px] flex flex-col justify-evenly">

        <div className="tv flex items-center flex-col" onClick={onclick} name="tv">

        <img src="../images/tvIcon.png " className="shrink w-[80%]" name="tv"></img>
        <div className="tv_text flex justify-center items-center" name="tv">TV</div>

        </div>

        <div className="wm flex flex-col items-center" onClick={onclick} name="wm">

            <img src="../images/wmIcon.png " className="shrink flex justify-center items-center w-[80%]" name="wm"></img>
            <div className="wm_text flex justify-center items-center" name="wm">Washers</div>
        
        </div>

        <div className="fridges flex flex-col justify-center items-center " onClick={onclick} name="Fridge">

            <img src="../images/fridgeIcon2.png" className="shrink h-[80px] w-1/2 flex " name="Fridge"></img>
            <div className="fridge_text flex justify-center items-center" name="Fridge">Fridges</div>

        </div>

        <div className="ac flex flex-col items-center" onClick={onclick} name="ac">

            <img src="../images/acIcon.png" className="shrink flex justify-center items-center w-[90%] " name="ac"></img>
            <div className="ac_text flex justify-center items-center" name="ac">AC</div>

        </div>
    </div>
    {prod_html}
    </div>
}