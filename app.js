require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
const mongoose = require('mongoose');
const testimonialsRouter = require('./routes/testimonials');

connectDB()

const app = express()
const PORT = 3000
app.use('/api/testimonials', testimonialsRouter);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth' ,require('./routes/auth'))
app.use('/api/teachers' ,require('./routes/teachers'))

app.listen(PORT , ()=>{
    console.log(`server is running on port : ${PORT}`)
})