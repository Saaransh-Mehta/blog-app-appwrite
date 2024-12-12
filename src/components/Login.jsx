import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { login } from '../feature/authSlice'
import {Button,Input} from './index'
import service from '../appwrite/config'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import { useForm } from 'react-hook-form'



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState(null)

const login = async(data) => {
    setError("")
    try {
     const session = await  authService.login(data.email , data.password)
     if(session){
        const userData = await authService.getUser()
        if(userData){
            dispatch(login(userData))
            navigate("/")
        }
     }
    } catch (error) {
        console.log("Error while sending data to backend")
        setError(error.message)
    }
}

  return (
    <>
    
    </>
  )
}

export default Login