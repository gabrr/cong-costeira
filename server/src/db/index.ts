import mongoose from 'mongoose'

export default mongoose.connect(process.env.DB_HOST || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connecting to database', )
})
.catch(err => console.log(err))
