const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const {errorHander} = require('./middleware/errorMiddleWare')

const connectDB = require('./config/db')
const port = process.env.PORT || 5000


connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHander)
app.listen(port,()=> console.log(`Server stared on port: ${port} `))