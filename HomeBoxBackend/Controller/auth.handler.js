import express from "express";
import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
import {gmailVerifier} from "../nodemailer/nodemailer.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import passwordGen from "../HelperFuns/passwordGenerator.js";


dotenv.config();

export const signUp = async (req, res) => {
  const { firstName, lastName, email} = req.body;
  try {
    const userExists = await User.exists({ email: email });
    if (userExists != null) {
      return res.status(409).json({ message: "user exits already" });
    }
    const password = passwordGen(8);
    const hasedPassword = bcryptjs.hashSync(password, 7);
    const newUser = User({
      firstName,
      lastName,
      email,
      password: hasedPassword,
    });
    await newUser.save();
    let isError = gmailVerifier({ email, password});
    if (isError) {
      throw new Error("try after some time: ");
    }
    res.status(201).json({ message: "User created successfully" });
  } 
  catch (error) {
    res
      .status(409)
      .json({ message: "this email already exists, please sign in" });
  }
  
};


export const signIn = async (req, res) => {
    const {email,password}= req.body;
    try{
      const user = await User.findOne({email});
      if(!user){
        return res.status(404).res.json({message:"email not exist"});
      }

      let isPassExist = bcryptjs.compareSync(password,user.password);
      if(!isPassExist){
        return res.status(400).json({ message: "Incorrect password" });
      }
      user.isVerified = true;
      user.save();

      const token= jwt.sign({isVerified:user.isVerified,firstName:user.firstName},process.env.JWT_SECRET,{expiresIn:"5d"});

      const expiryDate = new Date(Date.now() + (5*24*60*60*1000)); // 5 day
      
      res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate,secure:true},)
      // .cookie('access_token', token, { httpOnly: true, expires: expiryDate,},)
      .status(200)
      .json({_id:user._id,message:"user verified",});
    }catch (error) {
      res
        .status(500)
        .json({ message: error.message });
    }
};


export const checkToken = (req, res) => {
  const token = req.cookies.access_token || false;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = verified;
    if(verified){
      
      res.status(200).json({ message: " token verified" });
    }
  } catch (error) {
    res.status(400).json({ message: "unauthorized token" });
  }
};
