import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoImage from '../images/GR logo_icon.jpeg'
import logoText from '../images/GR logo_text.jpeg' 
import { ShoppingCart } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { useEffect } from 'react'
import profileUser from '../images/profile-user.png'
import {RouterProvider,createRoutesFromElements,createBrowserRouter,BrowserRouter , Routes,Route, Link,redirect,defer, Outlet} from 'react-router-dom'
import {gsap} from 'gsap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { PropTween } from 'gsap/gsap-core'
import closeIcon from "../images/close.png"
<images />

function Navbar() {
  console.log("c")
  const [navTabs_width,set_navTabs_width]=useState(null)
  const [current_tab,set_current_tab]=useState(window.location.pathname)
  const [username ,set_username]=useState()
  const [check,setcheck]=useState()
  
  function onclick(){
    let sidebar=document.getElementsByClassName("sidebar")
    sidebar[0].classList.remove('animate-sidebar_anim_show')
    sidebar[0].classList.add("animate-sidebar_anim_hide")
    let body=document.getElementsByClassName('fade')
    
    Array.from(body).forEach(element => {
      element.classList.remove('animate-fade_in')
      element.classList.add('animate-fade_out')
    })
  }
  function onclick2(){
    let sidebar=document.getElementsByClassName("sidebar")
    sidebar[0].classList.remove("animate-sidebar_anim_hide")
    sidebar[0].classList.add('animate-sidebar_anim_show')
    let body=document.getElementsByClassName('fade')
    Array.from(body).forEach(element => {
      element.classList.remove('animate-fade_out')
      element.classList.add('animate-fade_in')
    });
    if(localStorage.getItem("username")!==null){
      console.log(localStorage.getItem("username"))
      set_username(localStorage.getItem("username"))
    }
  }
  function onTabChange(){
   setTimeout(()=>{
    set_current_tab(()=>{
      return window.location.pathname
    })
   },500)
      
    
    
  }
  
  let width_arr=[]
  let final_margin_home
  let final_margin_shop
  let final_margin_service
  let final_margin_about


  useEffect(()=>{
    let navTabs=document.getElementsByClassName("nav_tabs")
    set_navTabs_width(navTabs[0].getBoundingClientRect().width)
  },[navTabs_width])
  console.log()

  
   useEffect(() => {
    let navTabs=document.getElementsByClassName("nav_tabs")
    let navOptions=document.getElementsByClassName("nav_option")
   
    let t1
    let t2
    let t3
    let t4
    let tstop
    
    window.addEventListener("resize",()=>
      {
        set_navTabs_width(navTabs[0].getBoundingClientRect().width)
      })
    let width_home=navOptions[0].getBoundingClientRect().width
    let width_shop=navOptions[1].getBoundingClientRect().width
    let width_service=navOptions[2].getBoundingClientRect().width
    let width_about=navOptions[3].getBoundingClientRect().width
    let calc_value=(navTabs_width-(width_shop+width_about+width_home+width_service))/8
    final_margin_home=(calc_value)
    final_margin_shop=((3*calc_value)+width_home)
    final_margin_service=((5*calc_value)+width_home+width_shop)
    final_margin_about=((7*calc_value)+width_home+width_shop+width_service)
    let navbar_resting_margin
    if(current_tab=="/"){
      navbar_resting_margin=final_margin_home
    }else if(current_tab=="/shop"){
      navbar_resting_margin=final_margin_shop
    }else if(current_tab=="/service"){
      navbar_resting_margin=final_margin_service
    }else if(current_tab=="/about"){
      navbar_resting_margin=final_margin_about
    }else{
      navbar_resting_margin=final_margin_home
    }
    console.log(navbar_resting_margin,current_tab)
    let hoverLine=document.getElementsByClassName("hover_line_container")
    let count=0
    let temp=null
    gsap.to(".hover_line_container",{marginLeft:`${navbar_resting_margin}px`,duration:1,width:width_home})
    for(let i=0;i<4;i++){
      let elem=navOptions[i]
      elem.addEventListener('mouseover',()=>{
        switch (i){
          case 0:
            tstop?.pause() ?? null
            temp?.pause() ?? null
            t1=gsap.to(".hover_line_container",{marginLeft:`${final_margin_home}px`,duration:1,width:width_home})
            temp=t1
            

            break
          case 1:
            tstop?.pause() ?? null
            temp?.pause() ?? null
            t2=gsap.to(".hover_line_container",{marginLeft:`${final_margin_shop}px`,duration:1,width:width_shop})
            temp=t2
          

            break
          case 2:
            tstop?.pause() ?? null
            temp?.pause() ?? null
            t3=gsap.to(".hover_line_container",{marginLeft:`${final_margin_service}px`,width:width_service ,duration:1})
            temp=t3
           
            break
          case 3:
            tstop?.pause() ?? null
            temp?.pause() ?? null
            t4=gsap.to(".hover_line_container",{marginLeft:`${final_margin_about}px`,duration:1,width:width_about})
            temp=t4
            
            break 
        }
      }
      )
      elem.addEventListener('mouseout', function() {
        temp?.pause() ?? null
        tstop=gsap.to(".hover_line_container",{marginLeft:`${navbar_resting_margin}px`,duration:2})
       
      });
    }
    let headContainer=document.getElementsByClassName("head_container")[0]
      let wrapper=document.getElementsByClassName("wrapper")[0]
      let line=document.getElementsByClassName("line")
      let line1=line[0]
      let line2=line[1]
      
    if(current_tab==="/about"){
      
      headContainer.classList.add("animate-anim_shrink_head")
      headContainer.classList.remove("animate-anim_grow_head")
      
      line1.classList.add("animate-anim_shrink_line")
      line2.classList.add("animate-anim_shrink_line")

      line1.classList.remove("animate-anim_shrink_line")
      line2.classList.remove("animate-anim_shrink_line")
      headContainer.classList.add("before:invisible")
      setTimeout(()=>{
        
        line1.classList.remove("animate-expand")
        line2.classList.remove("animate-expand")
        
      },[1100])
      setcheck(true)
      
      
    }
    
    if(current_tab!="/about" && check==true){
      console.log(current_tab)
      headContainer.classList.remove("animate-anim_shrink_head")
      
      headContainer.classList.add("animate-anim_grow_head")
      line1.classList.add("animate-anim_grow_line")
      line2.classList.add("animate-anim_grow_line")
      line1.classList.remove("animate-anim_shrink_line")
      line2.classList.remove("animate-anim_shrink_line")
      line1.classList.add("animate-expand")
      line2.classList.add("animate-expand")
      headContainer.classList.remove("before:invisible")
      setTimeout(()=>{
        headContainer.classList.remove("animate-anim_grow_head")
      },[1100])
      setcheck(false)
    }
  }, [navTabs_width,current_tab]) 
  

  
    return (
    <div className=""><header className="fade header  w-screen sticky top-0 bg-gray-400 z-10">
    <div before= "CONATACT US AT 7310777296 " className="head_container  h-1/6% w-full before:content-[attr(before)] before:text-black before:inline before:h-1/6 before:w-full before:relative before:top-0 before:left-[0%] before:animate-anim_phone_num" >
      <div className="wrapper h-5/6 w-full flex justify-center  gap-0">

      <div className="line_container h-full flex justify-end items-center grow" >
      <div className="line bg-black  h-[15%]  animate-expand   rounded-l-full shadow-l "></div>
      </div>

      <div className="logo_box h-full w-8/12 bg-black rounded-full flex flex-row justify-center items-center gap-x-2 shadow-l  border-white border-2 animate-logo_anim" >
        <img className='w-15% h-5/6' src={logoImage}/>
        <img className='w-3/5 h-5/6' src={logoText}/>
      </div>

      <div className="line_container h-full flex justify-start items-center grow ">
      <div className="line bg-black h-[15%] animate-expand 
 rounded-r-full shadow-l m-0"></div>
      </div>

      </div>
    </div>
    <div className='nav_container fade bg-white w-full flex justify-start '>
      <div className="hamburger w-1/24 text-4xl flex justify-center items-start" onClick={onclick2}>≡</div>
      <div  className='navbar bg-black h-10 w-11/12 m-auto shadow-lg border-black border border-b-0 border-t-2  mx-0 mt-1 flex flex-col'>
        <div className="nav_tabs flex justify-around font-semibold font-oswald  text-white ">
        <div className='nav_option flex justify-center items-center text-lg '>
          <Link onClick={onTabChange}>HOME</Link>
          </div>
        <div className='nav_option flex justify-center items-center text-lg '>
        <Link onClick={onTabChange} to="/shop">SHOP</Link>
        </div>
        <div className='nav_option flex justify-center items-center text-lg '>
        <Link onClick={onTabChange} to="/service">SERVICE</Link>
        </div>
        <div className='nav_option flex justify-center items-center text-lg '>
        <Link onClick={onTabChange} to="/about">ABOUT</Link>
          </div> 
        </div>

        <div className="hover_line h-1.5px w-full flex">
          <div  style={{marginLeft:`${final_margin_home}px`}} className="hover_line_container bg-gr-logo-blue h-1.5px w-75px ml-0">
          </div>
        </div>
      </div>
    </div>
    </header>
    <div className="sidebar h-screen w-[0%] fixed top-0 flex flex-row z-20">
      <div className="sidebar_main h-full  bg-white m-0 grow shadow-2xl w-[10%] flex flex-col ">
        
      <div className="sidebar_head h-[10%] w-full bg-black text-2xl text-white overflow-hidden whitespace-nowrap flex justify-start items-center row gap-3">
        <img src={profileUser} className="profile_icon ml-[10%] h-[25px] w-[25px]"/>
        <div className="user_name font-semibold w-[150px] tracking-wide">Hello, {username}</div>
        </div>
      
      <Link to="/login" className="login_option pl-[10%] bg-gray-100 hover:bg-gray-200 h-[50px] flex items-center text-lg font-sans overflow-hidden" onClick={onclick}>
      <LogIn className='mr-[5px]'/>
        {localStorage.getItem("username") ?  "Log Out": "Log In"}</Link>
      <Link to="/cart" className="cart_option pl-[10%] bg-gray-100 hover:bg-gray-200 h-[50px] flex items-center text-lg font-sans overflow-hidden" onClick={onclick}>
      <ShoppingCart size={24} color="black" className='mr-[5px]' />
        <div className="cart_icon h-[25px]">
          My Cart
          </div>
          
          </Link>

      </div>
      <div className='cross flex justify-center items-start mt-[7px] ml-[5px]'>
        <img className='close_icon h-[33px] ' src={closeIcon} onClick={onclick}/>
      </div>
    </div>
    <div className="fade">

    
    <Outlet />
    </div>
    </div>)
}

export default Navbar
