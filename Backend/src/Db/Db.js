import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connect = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log("error",error)
    }
}
export default connect