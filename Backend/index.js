import mongoose from "mongoose";
import app from "./app.js";
import dotenv from 'dotenv'
import connect from "./src/Db/Db.js";
dotenv.config();
const PORT =process.env.PORT || 8000

let databaseconnected = false;

(async function establishconnection(){
    if(!databaseconnected){
      try {
          await connect();
              databaseconnected = true
              app.listen(PORT,()=>{
                  console.log(process.env.PORT);
                  console.log(`Server is running on http://localhost:${PORT}`)
              })
      } catch (error) {
        console.log("Error while listening",error)
      }
    }
})();



