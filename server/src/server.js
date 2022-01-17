import express from 'express'
import api from './api'
import dotenv from 'dotenv'
import cors from 'cors' 

const app = express()
const port = process.env.PORT || 5000
dotenv.config()

// Cors
app.use(cors(/*{
    origin: process.env.SERVER_URL_ORIGINS.split(" "), 
    credentials: true
}*/))

app.use('/', api)

app.listen(port, () => console.log(`Running on port ${port}`))
