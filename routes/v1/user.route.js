const express = require('express');
const userControllers = require('../../controllers/user.controller');

const router = express.Router();

// Routes of Create and Save a User
router
.route('/')
.get(userControllers.getAllUsers)
.post(userControllers.saveAUser)

// Routes of Detail, update and Delete a User with Id
router
.route('/:id')
.get(userControllers.getUserDetails)
.patch(userControllers.updateUser)
.delete(userControllers.deleteUser)

module.exports = router;