import mongoose from 'mongoose'
const Schema = mongoose.Schema


const usersSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('users', usersSchema)

