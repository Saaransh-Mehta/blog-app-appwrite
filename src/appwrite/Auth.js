import { Client, Account, ID } from "appwrite";
import config from "../conf/conf.js";




export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(config.Endpoint)
        .setProject(config.apiKey);
    this.account = new Account(this.client)
    }

    async register({email,password,name}){
            try{
             const userAccount =await this.account.create(ID.unique(),email,password,name)
             if(userAccount){
                // Calling another method if user exists then go to  loginpage
                return this.login({email,password})
             }else{
                return userAccount
             }
            }
            catch(error){
                throw new Error(error)
            }
    }

async login({email,password}){
    try{
        const user = await this.account.createEmailPasswordSession(email,password)
        if(user){
            return user
        }else{
            //navigate to register page
            return this.register({email,password,name})
        }
    }
    catch(error){
        throw new Error(error)
    }
}

async logout(){
    try {
        await this.account.deleteSessions()
        
    } catch (error) {
        console.log("Unable to delete sessions" + error)
    }
}

async getUser(){
    try {
     const getUser= this.account.get()
     if(getUser){
        return getUser
     }else{
        return this.login({email,password})
     }
    } catch (error) {
        throw new Error(error)
    }
}
}

const authService = new AuthService()
export default authService