import React , {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input} from '../index'
import RTE from '../RTE'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = () => {
const {control , handleSubmit , register,watch,setValue,getValues} = useForm()

  return (
    <div>PostForm</div>
  )
}

export default PostForm