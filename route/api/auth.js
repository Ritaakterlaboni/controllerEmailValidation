const express = require('express');
const signUpController = require('../../controllers/signUpContoller');
const router = express.Router()

router.get("/signup", signUpController);

module.exports = router

