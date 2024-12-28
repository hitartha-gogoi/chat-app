import express from "express"
import mongoose from "mongoose"
import Room from "../models/chatroom"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const Router = express.Router()

Router.get("/", async(req,res)=> {

})

Router.post("/", async(req,res)=> {
    
})

Router.put("/", async(req,res)=> {
    
})

Router.delete("/", async(req,res)=> {
    
})

export default router