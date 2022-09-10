const express = require('express');
const userControllers = require('../../controllers/user.controller');

const router = express.Router();

router
.route('/')
.get(userControllers.getAllUsers)
.post(userControllers.saveAUser)

router
.route('/:id')
.get(userControllers.getUserDetails)
.patch(userControllers.updateUser)
.delete(userControllers.deleteUser)

module.exports = router;