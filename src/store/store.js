import { configureStore } from "@reduxjs/toolkit";
import { login,logout } from "../feature/authSlice";
import authReducer from '../feature/authSlice'
const store = configureStore({
    reducer:{
        auth: authReducer 
    }
})

export default store