import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AuthLayout = ({children,authentication = true}) => {

const navigate = useNavigate()
const [loader,setLoader] = useState(null)
const authSelector = useSelector(state => state.auth.status)

useEffect(()=>{
    if(authentication && authSelector !== authentication){
        navigate("/login")
    }else if(!authentication && authSelector !== authentication){
        navigate("/")
    }
 setLoader(false)
},[authentication,authSelector,navigate])
  return loader ? <h1>Loading.....</h1> : (<>{children}</>)
}

export default AuthLayout