import {Link} from "react-router-dom"
import fridge from "../images/fridge.jpg"
import ac from "../images/ac.png"
import tv from "../images/tv.png"
import washer from "../images/washer.png"
import all from "../images/all.png"
import Inverter from "../images/inverter.png"
import introCard from '../images/introCard.png'
import oven from "../images/oven.png"
import grooming from "../images/grooming.png"
import mixer from "../images/mixer.png"
import ApplianceDesign from "../images/ApplianceDesign.png"
import GuptaRadiosDiwali from "../images/GuptaRadiosDiwali.png"
import { useEffect } from "react"
export default function Home(prop){
    useEffect(()=>{
        let images=document.getElementsByClassName("absolute")
        if(prop.image_scrmbl==true){

        setTimeout(()=>{

          images[5].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))}px`:`${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))}px`
          images[5].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))}px`
          images[4].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))}px`
    
          images[4].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))}px`: `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+390*(prop.width_chng_prcnt/100)-((66.69)/100*390)}px`
    
          images[6].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)+0.5*(390*(prop.width_chng_prcnt/100))}px`
          :`${(prop.window_width/2)+0.5*(390*(prop.width_chng_prcnt/100))-280*(prop.width_chng_prcnt/100)+((66.69)/100*280)}px`
            
          images[6].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))}px`
    
          images[1].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))}px` : `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+(340*(prop.width_chng_prcnt/100)-((66.69)/100)*340)}px`
    
          images[1].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))-265*(prop.height_chng_prcnt/100)-0.2}px` 
    
    
          images[2].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))-265*(prop.height_chng_prcnt/100)}px`
          images[3].style['top']=`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))-265*(prop.height_chng_prcnt/100)}px`
    
          images[2].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+400*(prop.width_chng_prcnt/100)}px`:`${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+400*(prop.width_chng_prcnt/100)}px`
    
          let x=(images[2].style['left'])
          let y=parseInt(x.slice(0,-2))
          images[3].style['left']=prop.width_chng_prcnt!=66.69? `${y+280*(prop.width_chng_prcnt/100)}px`:`${y+280*(prop.width_chng_prcnt/100)-380*(prop.width_chng_prcnt/100)+((66.69)/100*380)}px`
    
          images[7].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))}px`:`${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+455*(prop.width_chng_prcnt/100)-((66.69)/100*455)}px`
    
          images[7].style['top']=`${(prop.window_height/2)+0.5*(325*(prop.height_chng_prcnt/100))}px`
    
          images[8].style['left']=prop.width_chng_prcnt!=66.69? `${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+(455*(prop.width_chng_prcnt/100))}px`:`${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))+(455*(prop.width_chng_prcnt/100))}px`
    
          images[8].style['top']=`${(prop.window_height/2)+0.5*(325*(prop.height_chng_prcnt/100))}px`
    
          let z=parseInt(images[8].style['left'].slice(0,-2))
          images[9].style['left']=prop.width_chng_prcnt!=66.69? `${z+298*(prop.width_chng_prcnt/100)}px`:`${z+298*(prop.width_chng_prcnt/100)-303*(prop.width_chng_prcnt/100)+((66.69)/100*303)}px`
    
          images[9].style['top']=`${(prop.window_height/2)+0.5*(325*(prop.height_chng_prcnt/100))}px`
    
 
          for(let i=1;i<=9;i++){
            images[i].style['transitionDuration']="0.7s"
            images[i].style['transitionProperty']="all"
            images[i].style['transitionTimingFunction']="ease-in-out"
            images[i].style['border']="1px solid black"
          }
        },500)
        
        
        setTimeout(()=>{
          prop.set_scrmbl(false)
        },1400)
      }
        setTimeout(()=>{                                            // image fixing androtate
          let whole_img=document.getElementsByClassName('whole_image')
          whole_img[0].style['rotate']='x 180deg'
          whole_img[0].style['transitionDuration']='0.5s'
          whole_img[0].style['transitionProperty']="all"
          whole_img[0].style['transitionTimingFunction']
          ="ease-in-out"
        },1500)

        setTimeout(()=>{
          let whole_img=document.getElementsByClassName('whole_image')
          whole_img[0].src=introCard
        },[1800])
      
    
    },[prop.window_height,prop.window_width,prop.image_scrmbl])

    return <main className='main fade h-main_height w-screen relative overflow-scroll z-0 flex'>
    
    {prop.image_scrmbl==true? (<div>
    <div style={{position:'absolute',top:`${10*(prop.height_chng_prcnt/100)}px`,left:`${20*(prop.width_chng_prcnt_dyn/100)}px`}} className='photos absolute' >
      <img style={{width:`${400*(prop.width_chng_prcnt/100)}px`,height:`${265*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*400}px`}} className='' src={fridge}/>
      </div> 

    <div style={{position:'absolute',top:`${46*(prop.height_chng_prcnt/100)}px`,left:`${455*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
      <img style={{width:`${280*(prop.width_chng_prcnt/100)}px`,height:`${265*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*280}px`}} className=' ' src={ac}/>
      </div>
    <div style={{position:'absolute',top:`${32*(prop.height_chng_prcnt/100)}px`,left:`${853*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${380*(prop.width_chng_prcnt/100)}px`,height:`${265*(prop.height_chng_prcnt/100)}px`}} className=' ' src={tv}/>
    </div>
    <div style={{position:'absolute',top:`${317*(prop.height_chng_prcnt/100)}px`,left:`${44*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${326*(prop.width_chng_prcnt/100)}px`,height:`${325*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*326}px`}} className=' a' src={washer}/>
    </div>
    <div style={{position:'absolute',top:`${319*(prop.height_chng_prcnt/100)}px`,left:`${423*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${390*(prop.width_chng_prcnt/100)}px`,height:`${325*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*390}px`}} className='' src={all}/>
    </div>
    <div style={{position:'absolute',top:`${350*(prop.height_chng_prcnt/100)}px`,left:`${899*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${340*(prop.width_chng_prcnt/100)}px`,height:`${325*(prop.height_chng_prcnt/100)}px`}} className=' ' src={Inverter}/>
    </div>
    <div style={{position:'absolute',top:`${679*(prop.height_chng_prcnt/100)}px`,left:`${11*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${455*(prop.width_chng_prcnt/100)}px`,height:`${307*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*455}px`}} className='' src={oven}/>
    </div>
    <div style={{position:'absolute',top:`${705*(prop.height_chng_prcnt/100)}px`,left:`${579*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${298*(prop.width_chng_prcnt/100)}px`,height:`${307*(prop.height_chng_prcnt/100)}px`,maxWidth:`${0.6669*298}px`}} className=' ' src={grooming}/>
    </div>
    <div style={{position:'absolute',top:`${658*(prop.height_chng_prcnt/100)}px`,left:`${932*(prop.width_chng_prcnt_dyn/100)}px`,transitionDuration:"0.2s",
    transitionProperty:"all",
    transitionTimingFunction:"ease-in-out",
    border:"1px solid black"}} className='photos absolute'>
        <img style={{width:`${303*(prop.width_chng_prcnt/100)}px`,height:`${307*(prop.height_chng_prcnt/100)}px`}} className=' ' src={mixer}/>
    </div>
    
    </div>):

    <div style={prop.width_chng_prcnt<66.69?{position:'absolute',left:`${(prop.window_width/2)-0.5*(390*(prop.width_chng_prcnt/100))-(326*(prop.width_chng_prcnt/100))-2}px`,top:`${(prop.window_height/2)-0.5*(325*(prop.height_chng_prcnt/100))-265*(prop.height_chng_prcnt/100)-0.2}px`}:{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
      <img src={ApplianceDesign} style={{width:`${(1060*prop.width_chng_prcnt/100)+5}px`,height:`${(887*prop.height_chng_prcnt/100)+10}px`,maxWidth:'707px'}} className='whole_image'/> 
      </div>}
      
    <div className="diwali_card flex justify-center items-center w-full" style={{position:'absolute',top:'86.66vh',height:`${1080*prop.height_chng_prcnt/100}px`}}>
        <img src={GuptaRadiosDiwali} width={887*prop.width_chng_prcnt/100} />
      </div>
      
  </main>
}