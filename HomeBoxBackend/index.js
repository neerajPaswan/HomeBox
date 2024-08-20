// const express = require("express");
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/products.route.js";
import CartRoutes from "./routes/cart.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
const PORT = 8000;  

// connection with mongodb database

mongoose.connect(process.env.MONGO)
.then(()=>{console.log('database connected')})
.catch((error)=>{
    console.log(error)
});

app.use(express.json());
app.use(cookieParser()); 
app.use(cors({
    origin:['http://localhost:5173','http://192.168.203.48:5173'], // replace with your frontend URL
    credentials: true,
  }))

app.use('/auth',authRoutes);
app.use('/product',productRoutes);
app.use('/cart',CartRoutes);


//specifying port for server
app.listen(PORT,()=>{
    console.log("hello backend");
});