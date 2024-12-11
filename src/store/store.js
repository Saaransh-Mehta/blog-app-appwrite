import { configureStore } from "@reduxjs/toolkit";
import { login,logout } from "../feature/authSlice";
const store = configureStore({
    reducer:{
        login,
        logout
    }
})

export default store