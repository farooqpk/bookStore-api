import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/route.js";
import dotenv from 'dotenv'
dotenv.config()


//create a server
const app = express();

//middleware to accept json from body
app.use(express.json())

//specify the router @ /
app.use("/",router)


//connect to db and then listen the port
mongoose
  .connect("mongodb://127.0.0.1:27017/bookStore")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server started`);
    });
  })
  .catch((error) => {
    console.error("Error while connecting to MongoDB:", error);
  });
