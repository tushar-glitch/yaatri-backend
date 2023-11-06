const user_Model = require("../models/user_data")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const get_all = async (req, res) => {
    const user_data = await user_Model.find()
    if (user_data)
        res.send(user_data)
    else {
        res.status(404).json({
            "message": "No data found"
        })
    }
}
const get_by_id = async (req, res) => {
    const id = req.params.id;
    // const isuser = await user_Model.findById(id)
    const isuser = mongoose.Types.ObjectId.isValid(id)
    if (!isuser) {
        res.status(404).json({
            "message": "No user found!"
        })
    }
    else {
        const user = await user_Model.findById(id)
        res.status(200).json(user)
    }
}
const create_user = async (req, res) => {
    const { name, email, password} = req.body;
    const isemail = await user_Model.findOne({
        email: email
    })
    if (isemail) {
        res.status(400).json({
            "message": "Email id already present"
        })
    }
    else {
        const hashedPass = await bcrypt.hash(password, 10);
        const new_user = user_Model({
            name: name,
            password: hashedPass,
            email: email
        })
        const save_user = await new_user.save();
        res.status(200).json({
            "message": "New User created!"
        })
    }
}
const update_user = async (req, res) => {
    const id = req.params.id
    const isuser = mongoose.Types.ObjectId.isValid(id)
    if (!isuser) {
        res.status(404).json({
            "message": "User not found"
        })
    }
    else {
        await user_Model.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            "message": "User updated successfully"
        })
    }
}
const delete_user = async (req, res) => {
    const id = req.params.id
    const isuser = mongoose.Types.ObjectId.isValid(id)
    if (!isuser) {
        res.status(404).json({
            "message": "User not found"
        })
    }
    else {
        const deleteuser = await user_Model.findByIdAndDelete(id)
        res.status(200).json({
            "message": "User deleted successfully"
        })
    }
}
module.exports = {
    get_all,
    get_by_id,
    create_user,
    update_user,
    delete_user
}