const config = {
    apiKey: String(import.meta.env.VITE_API_KEY),
    Endpoint:String(import.meta.env.VITE_API_ENDPOINT),
    Database: String(import.meta.env.VITE_DATABASE_ID),
    Collection : String(import.meta.env.VITE_COLLECTION_ID),
    Bucket : String(import.meta.env.VITE_BUCKET_ID)
}

export default config