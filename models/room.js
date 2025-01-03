import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema.Types

const RoomSchema = mongoose.Schema({
    _id : ObjectId,
    name: { type: String, required: true, unique: true },
    photo: { type: String, required: true, unique: true },
    description: { type: String, unique: true  },
    timestamp: { type: String },
    admin: { type: ObjectId, ref: 'User' },
    users: [{ type: ObjectId, ref: 'User' }]
})

const Room = mongoose.model('Room', RoomSchema)

export default Room