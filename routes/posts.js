import express from "express"
import mongoose from "mongoose"
import Room from "../models/room.js"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import Post from "../models/post.js"

const router = express.Router();

router.get("/", async(req,res)=> {

})

router.post("/", async(req,res)=> {
    
})

router.put("/", async(req,res)=> {
    
})

router.delete("/", async(req,res)=> {
    
})

const PostRoutes = router

export default PostRoutes