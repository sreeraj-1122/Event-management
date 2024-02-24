const express = require('express')
const connectDB = require('./config/db')
const router = require('./router/router')
const dotenv=require('dotenv')
const cors=require('cors')
const app = express()
dotenv.config();
app.use(cors())
app.use(express.json())
app.use('/', router)

connectDB();
const PORT = 5000
app.listen(PORT, () => console.log(`server running on ${PORT}`))
