import Navbar from '../Navbar/Navbar'
import FeedPage from '../../Pages/FeedPage/FeedPage'
import { Navigate } from 'react-router'
import Login from '../../Pages/Login/Login'

export default function Home() {




  return (
    <>
    <Navbar/>
      <FeedPage/>
    </>
  )
}
