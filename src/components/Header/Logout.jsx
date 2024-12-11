import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../feature/authSlice'
import authService from '../../appwrite/Auth.js'
const Logout = () => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <>
     <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Invert it
      </button>
    </>
  )
}

export default Logout