import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../feature/authSlice'
import authService from '../../appwrite/Auth.js'
import { Navigate, useNavigate } from 'react-router-dom'
const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () =>{
        authService.logout()
        navigate('/')
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <>
     <button onClick={logoutHandler} className="px-8 py-2 rounded-md bg-red-300 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        LogOut
      </button>
    </>
  )
}

export default Logout