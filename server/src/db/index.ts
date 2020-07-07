import Mongoose from 'mongoose'

export default Mongoose.connect(process.env.DB_HOST || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((e) => {
    console.log('Connected', e)
})
.catch(err => console.log(err))
