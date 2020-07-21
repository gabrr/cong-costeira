import axios from 'axios'
import 'dotenv'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API,
})