import mongoose from 'mongoose'
const Schema = mongoose.Schema

const appoitmentsSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
    },
    name3: {
        type: String,
    },
    when: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('appoitment', appoitmentsSchema)

