import {Link} from "react-router-dom"
import {useState} from "react"
import searchIcon from "../images/search-interface-symbol.png"
export default function Shop(){
    const [screen_width,set_screen_width]=useState(window.innerWidth)
    const [screen_height,set_screen_height]=useState(window.innerHeight)
    console.log(screen_height,screen_width)
    window.addEventListener("resize",()=>{
        set_screen_height(()=>{
            return window.innerHeight
        })
        set_screen_width(()=>{
            return window.innerWidth
        })
    })
    let width_chng_prcnt=screen_width<667? (screen_width/600)*100:(667/600)*100
    let height_chng_prcnt=(screen_height/687)*100
    console.log(width_chng_prcnt,height_chng_prcnt)
    return <div className="pt-4 h-main_height w-screen">
        <div className="search_bar h-10 w-4/5 flex row m-auto rounded-lg border-gr-logo-blue border-[3px] outline outline-2 outline-black ">
            <input className="search_field grow rounded-s-md border-white focus:outline-none ml-1 border-e-black border-e-2 font-sans text-gray-700 text-lg"></input>
            <button className="search_icon w-10 flex justify-center items-center border-s-2 border-s-gr-logo-blue bg-gr-logo-blue">
            <img className="search_icon_img h-[80%] w-[90%] " src={searchIcon}></img>
            </button>
        </div>
        <div className="grid_container h-[62vh] w-[80vw] max-w-[530px] grid m-auto min-w-[482.4px] font-oswald text-2xl justify-items-center items-center">
            <Link className="home_apl bg-[url('../images/applianceBGopaq.png')] bg-center bg-cover bg-no-repeat rounded-xl shadow-md  shadow-black flex justify-center items-center text-black hover:h-[120%] hover:w-[120%] h-[100%] w-[100%] hover:transition-all " to="/shop/appliance">HOME APPLIANCE</Link>
            <Link className="grooming bg-[url('../images/groomingBGopaq.png')] bg-cover rounded-xl  shadow-md shadow-black flex justify-center items-center  text-black hover:h-[120%] hover:w-[120%] h-[100%] w-[100%] hover:transition-all " to="/shop/grooming">GROOMING</Link>
            <Link className="batteries bg-[url('../images/batteryBGopaq.png')] bg-cover bg-center  rounded-xl shadow-md shadow-black flex justify-center items-center  text-black hover:h-[120%] hover:w-[120%] h-[100%] w-[100%] hover:transition-all " to="/shop/battery">BATTERIES

            </Link>

            <Link className="electricals bg-[url('../images/electricalsBGopaq.png')] bg-cover  rounded-xl shadow-md flex shadow-black text-black justify-center items-center hover:h-[120%] hover:w-[120%] h-[100%] w-[100%] hover:transition-all " to="/shop/electricals" >ELECTRICALS</Link>
        </div>
       
    </div>}