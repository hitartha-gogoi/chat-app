import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema.Types

const MessageSchema = mongoose.Schema({
    _id : ObjectId,
    type: { type: String, required: true, unique: true },
	message: { type: String, required: true, unique: true },
    timestamp: { type: String },
	photo: { type: String },
	received: { type: Boolean, required: true },
	user: { type: ObjectId, ref: 'User' },
	room: { type: ObjectId, ref: 'Room' }
})

const Message = mongoose.model('Message', MessageSchema)

export default Message 



