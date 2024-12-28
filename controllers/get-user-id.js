import User from "../models/user.js"

export default async function getUserID(req,res){
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(403).json({ message: 'User not found' });
        }
        
        return res.status(200).json({ message: 'success', data: user });
    } catch(error){
        res.status(500).json({ message: 'Internal server error', error });
    }
    
}