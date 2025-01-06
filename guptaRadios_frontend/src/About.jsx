import {Link} from "react-router-dom"
export default function About(){
    return <><div className="absolute flex h-[65%] justify-center w-[100vw] left-0 top-0 pl-1/24 pr-1/24"><div className="w-[100vw] bg-[url('../images/about.png')] bg-no-repeat bg-cover bg-right font-oswald font-light text-white " ><div className="text relative top-[100px] left-[50px] w-[290px]"><h1 className="text-[50px]">LINEAGE</h1>
    <p className="text-[27px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum itaque voluptate doloremque commodi quae omnis.</p></div></div>
    </div>
    <div className="foot h-[30%] w-[91.7%] ml-1/24 mr-1/24x bg-black absolute top-[65%] left-[0px] flex items-end text-">
    <div className="socials flex row justify-between w-[75%] ml-[12.5%] mr-[12.5%] pr-[10px] pl-[10px] bg-gradient-to-r from-[rgb(238,238,238)] to-white rounded-md h-[50px]">
    <div className="igCont ">
        <img className="ig h-[50px] w-[45px] transition-all duration-500 hover:h-[70px] hover:w-[63px] hover:relative hover:translate-y-[-10px] hover:translate-x-[-9px] rounded-[8px] pt-[2px] pb-[2px]" src="../images/igIcon.jpeg"/>
    </div>
    <div className="fbCont">
        <img className="ig h-[50px] w-[45px] transition-all duration-500 hover:h-[70px] hover:w-[63px] hover:relative hover:translate-y-[-10px] hover:translate-x-[-9px] rounded-[8px] pt-[2px] pb-[2px" src="../images/fbIcon.png"/>
    </div>
    <div className="wmsgCont" >
        <img className="wmsg h-[50px] w-[45px] transition-all duration-500 hover:h-[70px] hover:w-[63px] hover:translate-y-[-10px] hover:translate-x-[-9px] rounded-[8px] pt-[2px] pb-[2px]" src="../images/WhatsAppIcon.png"/>
    </div>
    <div className="mailCont">
        <img className="mail h-[50px] w-[45px] transition-all duration-500 hover:h-[70px] hover:w-[63px] hover:translate-y-[-10px] hover:translate-x-[-9px]  rounded-[8px] pt-[2px] pb-[2px]" src="../images/mailIcon.jpeg"/>
    </div>
    </div>
    </div>
    </>
}