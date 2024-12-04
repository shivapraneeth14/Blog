import express from 'express'
import cors from 'cors'
import router from './src/Routes/User.routes.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express()
app.use(cors({ origin: `${process.env.BACKEND_URL}`, credentials: true }));
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:true,
    limit: '50mb'

}))
app.use(express.static("Public"))

app.use("/api",router)

export default app