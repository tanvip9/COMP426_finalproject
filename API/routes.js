const express = require("express")

const router = express.Router()

const RegistrationFormH = require("./RegistrationFormHandler.js")

// router.post("/Register", RegistrationFormH.postMessage)
// router.get("/Register", RegistrationFormH.getMessages)
// router.get("/Registration/:id", RegistrationFormH.getMessageByID)

router.post("/api/register", RegistrationFormH.postMessage)
router.get("/api/register", RegistrationFormH.getMessages)
router.get("/api/register/:id", RegistrationFormH.getMessageByID)

module.exports = router