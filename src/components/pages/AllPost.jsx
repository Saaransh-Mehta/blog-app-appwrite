import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config'
import Container from '../container/Container'
import PostCard from '../PostCard'

const AllPost = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        service.allPosts([]).then((posts)=>{
            if(posts){
                setPost(posts.documents)
            }
        })

    },[])
   
  return (
    <div className='w-full py-8'>
        <Container>
            {post.map((posts)=>(
                <div key={posts.$id} className='p-2 w-1/4'>
                    <PostCard post={posts}/>
                </div>
            ))}
        </Container>
    </div>
  )
}

export default AllPost