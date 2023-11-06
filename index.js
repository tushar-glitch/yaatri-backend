const express = require('express')
const app = express()
require("dotenv").config()
const cors = require('cors')
const PORT = process.env.port || 3001;
const mongoose = require('mongoose')
const user_route = require('./routes/user_route')
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://tushar-glitch:${process.env.MongoPass}@cluster0.fjkozqb.mongodb.net/?retryWrites=true&w=majority`)
app.use(express.json())
app.use(cors())
const db = mongoose.connection;
db.on('open', () => {
    console.log('DB connected successfully');
})
app.use('/users',user_route)
app.listen(PORT)