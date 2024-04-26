
const path = require("path")

const DbPath = path.join(__dirname, "../Data/db.sqlite")

const handleRegistrationForm = {
    postMessage: async (req, res) => {
        res.send({message: "Post registration"})
    },
    getMessages: async(req, res) => {
        res.send({message: "Get all submissions"})
    }, 

    getMessageByID: async(req, res) => {
        res.send({message: "Get submission by ID"})
    } 
}

module.exports = handleRegistrationForm