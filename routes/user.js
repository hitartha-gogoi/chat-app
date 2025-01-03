import express from "express"
import passport from "passport"
import authenticate from "../middlewares/authenticate.js";
import getUserID from "../controllers/get-user-id.js";
import Signup from "../controllers/signup.js";
import Login from "../controllers/login.js";
import upload from "../middlewares/upload.js";
import DeleteUser from "../controllers/delete-user.js";
import PassportCallbackURL from "../controllers/passport-callback.js";
import 'dotenv/config'

const router = express.Router()

router.post("/signup", upload.single("photo"), Signup)

router.post('/login', Login);

router.get("/user/:id", authenticate, getUserID)

router.delete("/user/:id", DeleteUser)

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/auth/google/callback',  passport.authenticate("google", { session: false }), PassportCallbackURL)

router.get("/verify", (req,res)=> res.status(200).json({ message: "Success" }))

const UserRoutes = router

export default UserRoutes 