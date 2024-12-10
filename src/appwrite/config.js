import config from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Services{
client = new Client();
databases;
buckets;

constructor(){
    this.client
    .setEndpoint(config.Endpoint)
    .setProject(config.apiKey);
    this.databases = new Databases(client);
    this.buckets = new Storage(client);



}
async createPost({title,slug,content,featuredImage,status,userId}){
    try{
        const post = await this.databases.createDocument(config.Database,config.Collection,slug,{title,slug,content,featuredImage,status,userId})

    }
    catch(error){
        console.log("Error occured during creating post" + error)
    }

}
async updateDocument(slug,{title,content,featuredImage,status,userId}){
    try{
        const updatedPost = await this.databases.updateDocument(config.Database,config.Collection,slug,{
            title,
            slug,
            content,
            status,
            userId,
            featuredImage
        })
    }catch(error){
        console.log("error occured during updating post"+ error)
    }
}
async deletepost(slug){
    try{
        return await this.databases.deleteDocument(config.Database
            ,config.Collection,
            slug
        )
    }catch(error){
        console.log("Error occured during deleting post" + error)
    }
}
async readPost(slug){
    try {
        return await this.databases.getDocument(
            config.Database,
            config.Collection,
            slug
        )
        
    } catch (error) {
        console.log("Error during getting document" + error)
    }
}
async allPosts(query = [Query.equal("status","active")]){
    try {
        
        return await this.databases.listDocuments(
            config.Database,
            config.Collection,
           query
        )
        

    } catch (error) {
        console.log("Error occured during getting all post" + error)
        return false
    }
   
}


}

const service = new Services()

export default service