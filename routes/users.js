const express = require('express');
const router = express.Router();
const User = require('../models/user')
const userCtrl = require('../controllers/user')

//public routes
router.post('./signup', userCtrl.signup)
router.post('./login', userCtrl.login)