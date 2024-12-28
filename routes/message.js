import express from "express"
import mongoose from "mongoose"
import Room from "../models/room"
import bcrypt from 'bcrypt'
import multer from "multer"
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import MessageSchema from '../models/message'

const Router = express.Router()

Router.get("/messages", async(req,res)=> {
    try {
        const result = await MessageSchema.find()
        res.status(200).json({ message: result })
    } catch(error){
        res.status(500).json({ message: error })
    }
})

Router.get("/messages/:id", async(req,res)=> {
    try {
        const result = await MessageSchema.findById(req.params.id)
        res.status(200).json({ message: result })
    } catch(error){
        res.status(500).json({ message: error })
    }

})

Router.post("/message", async(req,res)=> {
    try {

    } catch(error){
        
    }

    
})

Router.put("/message/:id", async(req,res)=> {
    try {
        let { name, description, photo } = req.body
        const result = await MessageSchema.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true })
        res.status(200).json({ message: result })
    } catch(error){
        res.status(500).json({ message: error })
    }

})

Router.delete("/message/:id", async(req,res)=> {
    try {
        const result = await MessageSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: result })
    } catch(error){
        res.status(500).json({ message: error })
    }
})

export default Router