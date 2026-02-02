import mongoose from "mongoose";

const connectDB= async()=>{
    const uri=process.env.MONGO_DB_URI
    
    if(!uri){throw error("no mongo db uri")}
    const connectionInstance=await mongoose.connect(uri,{dbName:"readme_generatordb"})

    console.log(`\n MOngoBD connected !! DB HOST:${connectionInstance.connection.host}`)
}


export {connectDB}
