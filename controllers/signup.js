import bcrypt from 'bcrypt'
import User from "../models/user.js"
import 'dotenv/config'
import createToken from '../middlewares/create-token.js';

export default async function Signup(req,res) {
    
    try {
        if (!req.file) {
         //console.log(req.body)
          return res.status(400).json({ message: 'No file uploaded' });
        }
    
          const { username, email, password } = req.body
          const hashedPassword = await bcrypt.hash(password, 10);
  
          const fileUrl = req.file.path
          
          
          const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }]  });
          if (existingUser) {
            console.log("user already exists!")
            
              return res.status(400).json({ message: 'User already exists' });
          }
              
          //console.log(req.file)
          const newUser = new User({
              username: username,
              email: email,
              photo: fileUrl,
              password: hashedPassword,
              timestamp: new Date().toISOString(),
              status: true,
          })
  
          await newUser.save()
  
          const token = createToken(newUser);
  
          res.status(200).send("success")
          
      } catch(error){
          res.status(500).json({ message: 'error', error });
          console.log(error)
      }
    
}