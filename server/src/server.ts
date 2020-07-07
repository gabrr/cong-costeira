import express, { Request, Response } from 'express'
import cors from 'cors'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000
app.use(cors())




const people = {
    gabriel: "oliveira",
    jhon: "yesss"

}

app.get('/', (request: Request, response: Response) => {
    response.send("hello")
})

app.listen(port, () => console.log('Listening on port ' + port));
