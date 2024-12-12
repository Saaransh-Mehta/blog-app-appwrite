import React, { useState } from 'react'
import {Button , Input } from './index'
import { Link , useNavigate } from 'react-router-dom'
import authService from '../appwrite/Auth'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../feature/authSlice'
const SignUp = () => {
    const [error,setError] = useState(null)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const signUp = async(data)=>{
        setError("")
        try {
           const registerUser =  await authService.register(data)
           if(registerUser){
            const currUser = await authService.getUser()
            if(currUser) dispatch(login(currUser))
                navigate("/")
           }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }

  return (
    <>
    <div className='flex items-center justify-center'>
    <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
    <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(signUp)}>
                <div className='space-y-5'>
    <Input 
    label="email"
    placeholder="Enter your email"
    type="email"
    {...register("email",{
        required:true,
        validate: {
            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
            "Email address must be a valid address",
        }
    })}
    />
    <Input
    label="name"
    placeholder="Enter your name"
    {...register("name",{
        required:true
    })}
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
    <Button type="submit" children="Create Account"/>

                </div>


            </form>
    </div>

    </div>
    </>
  )
}

export default SignUp