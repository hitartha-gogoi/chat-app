import express from "express"
import morgan from "morgan"
import cors from "cors"
import fetch from "node-fetch"
import 'dotenv/config'
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import UserRoutes from "./routes/user.js"
import PostRouter from "./routes/posts.js"
//import MessageRouter from "./routes/message.js"
import connectDB from "./connect-db.js"

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan('dev'))
app.use(UserRoutes)
app.use(PostRouter)
//app.use(MessageRouter)
app.use(express.static('./uploads'))

app.use(session({
   secret: process.env.JWT_SECRET,
   resave: false,
   saveUninitialized: true,
 }));
 
 // Initialize Passport
 app.use(passport.initialize());

  // Configure Google Strategy
  passport.use(new GoogleStrategy({
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: `https://backend-second.vercel.app/auth/google/callback`, // Redirect URI
 },
 (accessToken, refreshToken, profile, done) => {
   // Here you can save user details to a database
   const user = {
      id: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
    };
   console.log('Google Profile:', profile);
   return done(null, profile); // Pass the user profile
 }
));

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
 done(null, user);
});
passport.deserializeUser((user, done) => {
 done(null, user);
});

connectDB()

app.get("/", async(req, res)=>{
   try {
      res.status(200).send("<h1> Hello World!</h1>")
   } catch(error){
      res.status(500).json({
         message: error
      })
   }
})

export default app