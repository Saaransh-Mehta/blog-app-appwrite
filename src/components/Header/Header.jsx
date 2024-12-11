import React from 'react'
import { useState } from 'react'
import Logout from './Logout'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [active,setActive] = useState(false)
    const selector = useSelector((state)=> state.auth.status)
    const navigate = useNavigate()
    

return(
    <>
    Header
    </>
)
   
  
}

export default Header