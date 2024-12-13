import React from 'react'
import { useState } from 'react'
import Logout from './Logout'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'

const Header = () => {
    const [active,setActive] = useState(false)
    const selector = useSelector((state)=> {return state.auth.status})
    const navigate = useNavigate()
    const navItems = [
        {
            name:"Home",
            slug:"/",
            status:true
        },{
            name:"Login",
            slug:"/login",
            status:!selector
        },{
            name:"Signup",
            slug:"/signup",
            status:!selector

        },{
            name:"All Post",
            slug:"/all-post",
            status:selector,
            

        },
        {
            name:"Add Post",
            slug:"/add-post",
            status:selector
        }
    ]

return(
    <>
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to={"/"}>
                    LOGO
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item,key)=>
                    item.status ? (
                            <>
                            <li key={key}>
                                <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full' onClick={()=>{navigate(item.slug)}}>{item.name}</button>
                            </li>
                            
                            </>
                    ) : null

                    )}
                    {
                        selector && (
                            <li>
                                <Logout/>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </Container>
    </header>
    </>
)
   
  
}

export default Header