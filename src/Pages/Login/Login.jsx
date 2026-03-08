import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import SignUp from "../SignUp/SignUp"
import { useForm } from "react-hook-form"
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useContext, useState } from "react"
import{ DotLoader } from "react-spinners"
import { NavLink, useNavigate } from "react-router"
import { authContext } from "../../Context/AuthContext"


const loginSchema = zod.object({
  email: zod.email("Email is invalid").nonempty("Email is required"),
  password: zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  
});





export default function Login() {

   const [errorMesg, setErrorMesg] = useState(null);
  const [loading, setLoading] = useState(false);

 const navigate = useNavigate();

 const{ setAuthUserToken } = useContext(authContext)

 function myHandelSubmit(values){
  setLoading(true)
 axios.post("https://route-posts.routemisr.com/users/signin", values, {
  headers:{
    "Content-Type":"application/json"
  }
 }).then(function(resp){
  console.log("response",resp.data.data.token);
 
  
  setAuthUserToken(resp.data.data.token)

  localStorage.setItem("token",resp.data.data.token)
  
  setTimeout(()=>{
 navigate("/home")
  },2000)
  
 })
 .catch(function(error){
 console.log("error",error);
 setErrorMesg(error.data?.message)
 }).finally(function(){
  setLoading(false)
 })
   
 }

const {handleSubmit, register, formState } = useForm({
 mode: "onBlur",
  resolver: zodResolver(loginSchema)
})

  return (
    <>
      <div  className="bg-gray-200 min-h-screen py-10 grid lg:grid-cols-2">


 <form onSubmit={handleSubmit(myHandelSubmit)}  className=' lg:order-2 bg-white grid place-content-centertext-center m-20 px-10 py-7 rounded-4xl'>
      
       <div className="social-btns rounded-lg p-1 grid grid-cols-2 gap-3 *:grow my-3 bg-slate-100 ">
       
        <button type="button"  className="text-center my-auto rounded-lg py-2 text-sm font-extrabold transition bg-white text-[#00298d] shadow-sm ">
          Login</button>
         <NavLink to="/" className="my-auto text-center rounded-lg py-2 text-sm font-extrabold transition  text-slate-600 hover:text-slate-800">
            Register</NavLink>
          
            </div>

      <header className="space-y-2 my-5 "> 
        <h2 className="text-2xl font-bold">Log in to Route Posts</h2>
        <p className="mt-1 text-sm text-slate-500">Log in and continue your social journey.</p>
           
      </header>
      
     
      
      
     

         
      
      
      <div className="relative">
  <FontAwesomeIcon
    icon={faUser}
    className="absolute top-6 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="email"
    {... register("email")}
    type="email"
    placeholder="Name@example.com"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0  "
  />
  {formState.errors.email && formState.touchedFields.email && <p className="pb-2 text-red-600">{formState.errors.email?.message}</p>}
         </div>

       
       <div className="relative">
  <FontAwesomeIcon
    icon={faKey}
    className="absolute top-6 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="Password"
    {... register("password")}
    type="password"
    placeholder="Password"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  />
  {formState.errors.password && formState.touchedFields.password && <p className="pb-2 text-red-600">{formState.errors.password?.message}</p>}
         </div>

 
       

           

<button type="submit" disabled={loading}
 className="my-auto w-full flex place-content-center text-center rounded-xl py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-[#00298d] hover:bg-[#001f6b]">
  {loading? <DotLoader size={20} />:"Log In"}
  
  
  </button> 

  {errorMesg && <div class="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700">{errorMesg}</div>}     
     
    </form>


      <SignUp/>
    
   
     
     

    </div>
    </>
  )
}
