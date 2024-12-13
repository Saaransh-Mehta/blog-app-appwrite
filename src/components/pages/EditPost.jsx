import React,{useEffect,useState} from 'react'
import Container from '../container/Container'
import PostForm from '../PostForm/PostForm'
import service from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [posts,setPosts] = useState([])
   const {slug} = useParams()
   const navigate = useNavigate()

   useEffect(()=>{
    if(slug){
        service.readPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    }else{
        navigate('/')
    }
   },[slug,navigate])
  return posts ? <div>

    <Container>
        <PostForm post={posts}/>
    </Container>
  </div> : null
}

export default EditPost