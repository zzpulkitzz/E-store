import { useState,useEffect} from 'react'
import searchIcon from "../images/searchIcon.png"
export default function Admin(){
    const [prod,setProd]=useState([])
    const [count,setCount]=useState(0)
    const [appl_slctd,set_appl_slctd]=useState(null)
    const [is_edit, set_is_edit]=useState([])
    console.log(is_edit)
    
    let getData=async (value)=>{
        console.log("hget")
        try{
            let response=await fetch(`http://localhost:5500/products/appliances?searchExp=${value}`)
            let list_temp =await response.json()
            console.log(list_temp)
            setProd(list_temp.product)

            if (!response.ok) {
                // Throw an error if the response status is not OK
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
        }catch(error){
        
            console.log(error.message)
        }
        
    }

    function onclick2(event){
        event.preventDefault()
        console.log("cad")
        let form=document.getElementsByClassName("form")[0]
        let formData=new FormData(form)
        let formDict2={}
        console.log(JSON.stringify(formData))
        let formItrt2=formData.entries()
        for(const [key,value] of formItrt2){
            formDict2[key]=value
        }
        console.log(formData)
        console.log(formDict2)
        let sendData=async ()=>{
            try{
                let response=await fetch("http://localhost:5500/products/appliances",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(formDict2)})

                let res=await response.json()
                console.log(res)
                
            }catch(error){
                console.log(error)
            }
            
        }
        sendData()
            setTimeout(()=>{
                
                
                getData()
            },[100])
            
            
            
    
        
        
    }

    function onclick3(event){
           
            if(!(is_edit.includes(event.target.id))){
                console.log("nheh")
            set_is_edit((prev)=>{
                return [...prev,event.target.id]
            })}
           /*  let sendEditedData=async ()=>{
                try{
                    let response=await fetch("http://localhost:5500/products/appliances",{
                    method:"PUT",
                    headers:{"Content-type":"application/json"},
                    body: JSON.stringify(textarea.value)})
                    console.log(response)
                    
                }catch(error){
                    console.log(error)
                }
                
            }
            sendEditedData() */

        }
        
        function onclick4(event){
        
            let textarea=document.getElementsByClassName(`textarea_${event.target.id}`)[0]
            let dict=JSON.parse(textarea.value)
            dict["_id"]=event.target.id
            console.log(dict)
            let sendEditedData=async ()=>{
                try{
                    let response=await fetch("http://localhost:5500/products/appliances",{
                    method:"PUT",
                    headers:{"Content-type":"application/json"},
                    body: JSON.stringify(dict)})
                    console.log(response.json())
                    getData()
                    
                }catch(error){
                    console.log(error)
                }finally{
                    set_is_edit((prev)=>{
                        let index=prev.indexOf(event.target.id)
                        prev.splice(index,1)
                        return [...prev]
                    })
                }
                
            }
            sendEditedData()
            

        }
        
                
     


    function onclick(event){
        let id=event.target.name
        console.log(id)
        fetch(`http://localhost:5500/products/appliances/${id}`, {
        method: 'DELETE'
        })
        getData()
    }
    function focus_func(event){
        
                    console.log("Cdasc")
                   
                    let textarea_search=document.getElementsByClassName("textarea_search")[0]
                    let searchText=document.getElementsByClassName("search_text")[0]
                    textarea_search.focus()
                    textarea_search.addEventListener("input",()=>{
                        searchText.classList.add("hidden")
                    })
                    textarea_search.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault(); // Prevent the newline from being added
                          onSearch();
                        }
                      });
                      textarea_search.addEventListener('blur', function() {
                        if(textarea_search.value===""){
                        searchText.classList.remove("hidden")
                   }
                      });
                      
    }
    function onSearch(event){
        let textarea_search=document.getElementsByClassName("textarea_search")[0]
        getData(textarea_search.value)
    }
    

    let etxndd_flds_dict={"tv":{"field_name":"special tv code"},"fridge":{"field_name":"special fridge code"},"wm":{"field_name":"special wm code"},"ac":{"field_name":"special ac code"}}
  
    
    
    let extndd_flds_html=appl_slctd==null?null: <div>
       <label className={`label_${etxndd_flds_dict[`${appl_slctd}`]["field_name"]}`}>{etxndd_flds_dict[`${appl_slctd}`]["field_name"]} 
        </label> 
        <input className={`input_${etxndd_flds_dict[`${appl_slctd}`]["field_name"]}`} type="input"/>
    </div>
    
    
    

    useEffect(()=>{
        getData()
        let select_tag=document.getElementsByClassName("appliance_type_input")[0]
    select_tag.addEventListener("change",(elem)=>{
        if(elem.target.value!=="none"){
            set_appl_slctd(()=>elem.target.value)

        }
        
    })
    },[0])
    console.log(prod)
    let list=(prod==[] || prod===undefined)? "" :prod.map((elem)=>{
        return <div key={elem._id} className='flex flex-row justify-evenly mb-3'>
            {is_edit.includes(elem._id)? <textarea className={`textarea_${elem._id}`} defaultValue={`{"name": "${elem.name}", "price": "${elem.price}", "warranty": "${elem.warranty}", "delivery": "${elem.delivery}"}`} >     
            </textarea>:
            <div >
                name:{elem.name} price:{elem.price} warranty:{elem.warranty} delivery:{elem.delivery}
            </div>}
            <button name={elem._id} className="delete bg-red-400 border-2 border-black" onClick={onclick}>delete</button>
            <button name={elem._id} className="edit bg-green-400 border-2 border-black" onClick={is_edit.includes(elem._id)?onclick4:onclick3} id={elem._id}>{is_edit.includes(elem._id)?"post":"edit"}</button>
            </div>
      
    })
    let search="search"

    return <div className="admin_container">
    <div className="search_bar-container flex justify-end ">
       
        <div className="search_bar w-[150px] h-[30px] border-[2px] border-blue-200 border-solid flex flex-row relative" >
        
            <img src={searchIcon} className="h-[25px]" onClick={onSearch}/>
       
            <textarea name="" id="" cols="30" rows="10"  className=" textarea_search flex-grow focus:border-[red] focus:outline-[0px] " onClick={focus_func} ></textarea>
            <div className="search_text absolute left-[25px] opacity-40" onClick={focus_func}>{search}</div>
        </div>
    </div>
    <form className="form grid grid-cols-2">
        <div>
        <label className="appliance_name">Name:</label>
        <input className="appliance_name" placeholder="name" name="name"></input>
        </div>
        <div>
        <label className="appliance_price">Price:</label>
        <input className="appliance_price" placeholder="price" name="price"></input>
        </div>
        <div>
        <label className="appliance_warranty">Warranty:</label>
        <input className="appliance_warranty" placeholder="warranty " name="warranty"></input>
        </div>
        <div>
        <label className="appliance_delivery" >Delivery:</label>
        <input className="appliance_delivery" placeholder="delivery" name="delivery"></input>
        </div>

        <div>
        <label className="appliance_type">Appliance Type:</label>
        <select id="appliance_type" name="applianceType" className="appliance_type_input bg-white border-[1px] border-black text-sm" >
            <option value="none" className="">None</option>
            <option value="fridge" className="">Fridge</option>
            <option value="tv" className="">TV</option>
            <option value="wm" className="">Washing Machine</option>
            <option value="ac" className="">Air Conditioner</option>
        </select>
        {appl_slctd!==null? extndd_flds_html:null}
        
        </div>

        <button className="submit_button col-start-1 col-end-3" onClick={onclick2}>Add
        </button>
        

    </form>
    <div className="products_list">Current products listed:{list}
    </div>
    </div>
}
