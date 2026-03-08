import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import {HeroUIProvider} from "@heroui/react";

import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Registe from './Pages/Register/Registe'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'
import AuthContextProvider from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import AuthUser from './Components/AuthUser/AuthUser'
import Post from './Pages/Post/Post'
import Feed from './Pages/FeedSec/Feed'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PostDetails from './Pages/PostDetails/PostDetails'
import CreatComment from './Pages/CreatComment/CreatComment'
import { Toaster } from 'react-hot-toast';
import UpdatePost from './Pages/UpdatePost/UpdatePost';





const router = createBrowserRouter([
  { path:"" , element:<Layout/>, children:[
    { path:"", element: <AuthUser> <Registe/> </AuthUser>  },

    { path:"home", element: <ProtectedRoute> <Home/> </ProtectedRoute>, children:[
      { path:"posts", element: <Post/>},
      { path: "", element: <Feed/> }
    ] },
    {path:"postDetails/:id", element: <ProtectedRoute> <PostDetails/> </ProtectedRoute>},
    {path:"updatepost/:id", element: <ProtectedRoute> <UpdatePost/> </ProtectedRoute>},
    { path:"login", element:<AuthUser> <Login/> </AuthUser>  },
    { path:"*", element:<NotFound/> }
  ] }

])

const defaultConfig = new QueryClient()

function App() {
 

  return (
    <>
     <HeroUIProvider>
      
     <QueryClientProvider client={defaultConfig} >
     <AuthContextProvider>
    <RouterProvider router={router}/>
    <Toaster toastOptions={{ style: { zIndex: 9999 } }} />
    </AuthContextProvider>
    </QueryClientProvider>
</HeroUIProvider>

    </>
  )
}

export default App
