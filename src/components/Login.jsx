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
     const session = await  authService.login(data)
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
    <div className='flex items-center justify-center w-full '>
    <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
    <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                       
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email",{required:true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }})}
                />
                <Input
                label="password"
                placeholder="Enter your password"
                type="password"
                {...register("password",{
                    required:true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                          'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character',
                     }
                })}
                />
                <Button
                type="submit"
                children="Login"
                />
            </div>

        </form>

    </div>
    </div>
    </>
  )
}

export default Login