import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth.js'
import {login,logout} from './feature/authSlice.js'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
// import 'dotenv/config'

function App() {
  const [count, setCount] = useState(0)
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getUser()
    .then((data)=>{
      if(data){
        dispatch(login({data}))
      }else{
       dispatch(logout({data}))
      }
    })
    .finally(()=>{setLoading(false)})
  },[])

  return !loading ? (
    <>
    <div className='min-h-screen flex flex-wrap contet-between bg-gray-500'>
    <div className='w-full block'>
      <Header/>
      <main>
        {<Outlet/>}
      </main>
      <Footer/>
    </div>

    </div>
    </>
  ) : (<>
  <div>
  Still loading
  </div>
  </>
  )
}

export default App
