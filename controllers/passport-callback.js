import passport from "passport"
import createToken from "../middlewares/create-token.js"

export default async function PassportCallbackURL(req,res) {
    const user = req.user;
    const token = createToken(user)
    console.log(user)
    res.status(200).json({ message: "success", token: token })
    
}