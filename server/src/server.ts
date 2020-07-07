require('dotenv').config()
import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT || 8000
app.use(cors())

mongoose.connect(process.env.DB_HOST || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to database', )
})
.catch(err => console.log(err))

app.use(express.json())

const User = mongoose.model('User', new mongoose.Schema({ name: String }));



app.post('/appointment', async (req: Request, res: Response) => {
    const { name1 } = req.body

    try {
        const newuser = new User({ name: name1 })

        newuser.save((err) => {
            if (err) return console.log(err, '....Error when trying to save');
        }) 
        res.json(newuser)
        
    } catch (error) {
        console.log(error)
    }
})



app.listen(port, () => console.log('Listening on port ' + port));
