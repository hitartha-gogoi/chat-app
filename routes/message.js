import express from "express"
import mongoose from "mongoose"
import Room from "../models/room"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'
//import Message from "../models/message.js"

const router = express.Router()

router.get("/messages", async(req,res)=> {
    try {
       // const result = await Message.find()
        res.status(200).json({ message: "result" })
    } catch(error){
        res.status(500).json({ message: error })
    }
})

router.get("/messages/:id", async(req,res)=> {
    try {
      //  const result = await Message.findById(req.params.id)
        res.status(200).json({ message: "result" })
    } catch(error){
        res.status(500).json({ message: error })
    }

})

router.post("/message", async(req,res)=> {
    try {

    } catch(error){
        
    }

    
})

router.put("/message/:id", async(req,res)=> {
    try {
      //  let { name, description, photo } = req.body
      //  const result = await Message.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true })
        res.status(200).json({ message: "result" })
    } catch(error){
        res.status(500).json({ message: error })
    }

})

router.delete("/message/:id", async(req,res)=> {
    try {
      //  const result = await Message.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "result" })
    } catch(error){
        res.status(500).json({ message: error })
    }
})

const MessageRouter = router

export default MessageRouter