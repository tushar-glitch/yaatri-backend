const express = require('express')
const route = express.Router()
const {get_all, get_by_id, create_user, update_user, delete_user} = require('../controllers/userController')
route.get('/',get_all)
route.get('/:id',get_by_id)
route.post('/',create_user)
route.patch('/:id',update_user)
route.delete('/:id',delete_user)

module.exports = route