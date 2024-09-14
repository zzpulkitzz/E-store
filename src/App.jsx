import {RouterProvider,createRoutesFromElements,createBrowserRouter,BrowserRouter , Routes,Route, Link,redirect,defer,Navigate} from 'react-router-dom'
import Admin from "./Admin"
import Navbar from './Navbar'
import Shop from './Shop'
import Service, {Loader as Loader } from './Service'
import About from './About'
import Home from './Home'
import {useState} from 'react'
import Login ,{Action as Action} from './Login'
import Appliance from "./shopping categories/Appliance"
import Grooming from "./shopping categories/Grooming"
import Battery from "./shopping categories/Battery"
import Electricals from "./shopping categories/Electricals"

import Cart from "./Cart"

function App(){
    const [window_width,set_window_width]=useState(window.innerWidth)
    const [window_height,set_window_height]=useState(`${(5/6*(window.innerHeight))-44}`)
    const [image_scrmbl,set_scrmbl]=useState(true)

    let width_chng_prcnt=(window_width/1260)*100  // code for resize adjustments 
    let width_chng_prcnt_dyn=width_chng_prcnt
    width_chng_prcnt=width_chng_prcnt>66.69? 66.69 : (window_width/1260)*100
    let height_chng_prcnt=(window_height/1100)*100

    window.addEventListener("resize",()=>{
        set_window_width(window.innerWidth)
        set_window_height((5/6*(window.innerHeight))-44)
    })
    localStorage.setItem("email","bob@gmail.com")
    localStorage.setItem("password","123")
    
 
    return <RouterProvider router={createBrowserRouter(createRoutesFromElements(

        <Route>
        
        <Route path="/" element={<Navbar/>}>
            <Route index element={<Home width_chng_prcnt={width_chng_prcnt} height_chng_prcnt={height_chng_prcnt} window_height={window_height} window_width={window_width} image_scrmbl={image_scrmbl} set_scrmbl={set_scrmbl} width_chng_prcnt_dyn={width_chng_prcnt_dyn}/>}/>
          
            <Route path="/shop" element={<Shop/>}/>
 
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/shop/appliance" element={<Appliance/>}/>
            <Route path="/shop/electricals" element={<Electricals/>}/>
            <Route path="/shop/grooming" element={<Grooming/>}/>
            <Route path="/shop/battery" element={<Battery/>}/>
     
            <Route path="/service" element={<Service/>} loader={Loader} />
            
            <Route path="/login" element={<Login/>} action={Action}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/crazy" element={<div>🤪 This is CRAZY! 🎉</div>}/>
            <Route path="/wild" element={<marquee>🚀 Welcome to the WILD side! 🌈</marquee>}/>
            <Route path="/bonkers" element={
              <div style={{animation: 'spin 2s linear infinite'}}>
                🍌 Going absolutely BONKERS! 🙃
              </div>
            }/>
        </Route>
        
        </Route>
))} />

}

export default App