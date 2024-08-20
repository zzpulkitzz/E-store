import {RouterProvider,createRoutesFromElements,createBrowserRouter,BrowserRouter , Routes,Route, Link,redirect,defer, Outlet,Form} from 'react-router-dom'
async function sendData(body){
    try{
        let response=await fetch("http://localhost:5500/products/appliances",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(body)})

        let res=await response.json()
        localStorage.setItem('token',res)
        
    }catch(error){
        console.log(error)
    }
}
export async function Action({request}){
    let formdata = await request.formData()
    let email=formdata.get("email")
    let password=formdata.get("password")
    sendData({email,password})
    localStorage.setItem("virtual_email",`${email}`)
    localStorage.setItem("virtual_password",`${password}`)
    let real_email=localStorage.getItem("email")
    let real_password=localStorage.getItem("password")
    let virtual_email=localStorage.getItem("virtual_email")
    let virtual_password=localStorage.getItem("virtual_password")
    let message=new URL(request.url).searchParams.get('message')==null? "":new URL(request.url).searchParams.get('message')
    let pathname=new URL(request.url).searchParams.get('redirectTo')==null? "/":new URL(request.url).searchParams.get('redirectTo')
    if(virtual_email===real_email & virtual_password===real_password){
        console.log(email,password,virtual_email,virtual_password)
        let username=virtual_email.slice(0,3)
        localStorage.setItem("username",username)
        return redirect(`${pathname}`) 
    }else{
        console.log("try again")
    }
    return null
}
export default function Login(){
    return <main className="main h-[500px] w-screen  mt-9">
    <div className="form_container h-[85%] w-[60%] bg-black m-auto pl-6 pr-6 pt-3 pb-3 ">

        <Form method="post" className="form flex flex-col justify-around h-full w-full" replace>
        <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className='bg-white text-black text-lg h-12 rounded-md pl-1'
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-white text-black text-lg h-12 rounded-md pl-1"
                />
                <button disabled={ navigation.state==="submitting"} className="h-10 bg-blue-400 w-[150px] ml-auto mr-auto rounded-sm">LOGIN</button>
        </Form>

    </div>
    
    </main>
}