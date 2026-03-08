import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { faAt, faCalendar, faEnvelope, faKey, faVenusMars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import SignUp from "../SignUp/SignUp"
import { useForm } from "react-hook-form"
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import{ DotLoader } from "react-spinners"
import { NavLink, useNavigate } from "react-router"



const registeSchema = zod.object({
  name: zod.string().nonempty("Name is required").min(3,"Name must be at least 3 characters").max(20,"Name cannot be more than 20 characters"),
  email: zod.email("Email is invalid").nonempty("Email is required"),
  password: zod.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  rePassword: zod.string().nonempty("Confirm password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  username: zod.string().optional(),
  dateOfBirth: zod.coerce.date("Invalid date").refine(function(fieldValue){
 return new Date().getFullYear() - fieldValue.getFullYear() >= 18? true: false ;
  } ,"Age must be at least 18 years").transform(function(date){
 return date.toISOString().split("T")[0]; 
//  `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
  }),
  gender: zod.enum(['male','female'])
}).refine(function(obj){
return obj.password === obj.rePassword
},{path:"rePassword" , error:"Password and confirm password should be the same"});



export default function Registe() {


  const [errorMesg, setErrorMesg] = useState(null);
  const [loading, setLoading] = useState(false);

 const navigate = useNavigate();

 function myHandelSubmit(values){
  setLoading(true)
 axios.post("https://route-posts.routemisr.com/users/signup", values).then(function(resp){
  console.log("response",resp);
  setTimeout(()=>{
 navigate("/login")
  },2000)
  
 })
 .catch(function(error){
 console.log("error",error.response.data.errors);
 setErrorMesg(error.response.data.errors)
 }).finally(function(){
  setLoading(false)
 })
   
 }

const {handleSubmit, register, formState } = useForm({
 mode: "onBlur",
  resolver: zodResolver(registeSchema)
})

  
  return (
    <>
    <div  className="bg-gray-200 min-h-screen py-10 grid lg:grid-cols-2">


 <form onSubmit={handleSubmit(myHandelSubmit)}  className=' lg:order-2 bg-white grid place-content-centertext-center m-20 px-10 py-7 rounded-4xl'>
      
       <div className="social-btns rounded-lg p-1 grid grid-cols-2 gap-3 *:grow my-3 bg-slate-100 ">
       
        <NavLink to="/login" className="text-center rounded-lg py-2 text-sm font-extrabold transition text-slate-600 hover:text-slate-800">
          Login</NavLink>
          <NavLink  className="text-center rounded-lg py-2 text-sm font-extrabold transition bg-white text-[#00298d] shadow-sm">
            Register</NavLink>
          
            </div>

      <header className="space-y-2 my-5 "> 
        <h2 className="text-2xl font-bold">Create a new account</h2>
        <p className="mt-1 text-sm text-slate-500">It is quick and easy.</p>
           
      </header>
      
     
      
      
      <div className="relative">
  <FontAwesomeIcon
    icon={faUser}
    className="absolute top-5 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="username"
    {... register("name")}
    type="text"
    placeholder="Enter your full name"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  />
  {formState.errors.name && formState.touchedFields.name && <p className="pb-2 text-red-600">{formState.errors.name?.message}</p>}
         </div>

         <div className="relative">
  <FontAwesomeIcon
    icon={faAt}
    className="absolute top-6 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="user"
    {... register("username")}
    type="text"
    placeholder="Username (Optional)"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  />
  {/* {formState.errors.name && formState.touchedFields.name && <p className="pb-2 text-red-600">{formState.errors.name?.message}</p>} */}
         </div>
      
      
      <div className="relative">
  <FontAwesomeIcon
    icon={faEnvelope}
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
    icon={faVenusMars}
    className="absolute top-6 left-4 -translate-y-1/2 text-gray-500"
  />

  <select 
  className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  name="Select your gender"
  {... register("gender")}
   id="gender">
        <option {... register("gender")} value="">Select your gender</option>
        <option  value="male">Male</option>
        <option value="female">Female</option>
      </select>
    {/* <p className=" text-red-600">{formState.errors.gender?.message}</p> */}
    </div>  

     <div className="relative">
  <FontAwesomeIcon
    icon={faCalendar}
    className="absolute top-6 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="dateOfBirth"
    {... register("dateOfBirth")}
    type="date"
    placeholder="Confirm your password"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0"
  />
  {formState.errors.dateOfBirth && formState.touchedFields.dateOfBirth && <p className=" pb-2 text-red-600">{formState.errors.dateOfBirth?.message}</p>}
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
    placeholder="Creat a strong password"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  />
  {formState.errors.password && formState.touchedFields.password && <p className="pb-2 text-red-600">{formState.errors.password?.message}</p>}
         </div>

 
       <div className="relative">
  <FontAwesomeIcon
    icon={faKey}
    className="absolute top-6 left-4 -translate-y-1/2 text-slate-400"
  />

  <input
    id="re-Password"
    {... register("rePassword")}
    type="password"
    placeholder="Confirm your password"
    className="w-full bg-slate-50 text-sm pl-12 py-3 mb-4 border rounded-xl  focus:bg-white border-slate-200 focus:border-[#00298d] focus:outline-0 "
  />
  {formState.errors.rePassword && formState.touchedFields.rePassword && <p className="pb-2 text-red-600">{formState.errors.rePassword?.message}</p>}
         </div> 

           

<button type="submit" disabled=""
 className="w-full flex place-content-center text-center rounded-xl py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-[#00298d] hover:bg-[#001f6b]">
  {loading? <DotLoader size={20} />:"Create Account"}
  
  
  </button> 

  {errorMesg && <div class="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700">{errorMesg}</div>}     
     
    </form>


      <SignUp/>
    
   
     
     

    </div>
    </>
  )
}
