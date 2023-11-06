const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
})

const user_Model = mongoose.model('users-assignment', user_schema)
module.exports = user_Model