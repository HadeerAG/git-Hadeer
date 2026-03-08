import { createContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

export const authContext = createContext()


export default function AuthContextProvider({children}) {

  const [ userToken, setUserToken ] = useState(function(){
    return localStorage.getItem("token")
  })

  console.log("userToken",userToken);

  const [userId, setUserId] = useState(null)

  
  
  // useEffect(function(){
  //   if (localStorage.getItem("token") !== null) {
  //     setUserToken(localStorage.getItem("token"))
  //   }
  // },[])

  function setAuthUserToken(tkn) {
    setUserToken(tkn)
  }

  function clearUserToken(){
    setUserToken(null);
  }

useEffect(()=>{
if (localStorage.getItem("token")){
    const {user} = jwtDecode(localStorage.getItem("token"))
  console.log("decoded", user);
  setUserId(user)
}
},[userToken])
  
    return (
    <authContext.Provider value={{ userToken, setAuthUserToken, clearUserToken, userId }}>
      {children}
    </authContext.Provider>
  )
}
