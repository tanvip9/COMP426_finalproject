
const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const DbPath = path.join(__dirname, "../Data/db.sqlite")
const DbPathDev = path.join(__dirname, "../Data/test-db.sqlite")

const handleRegistrationForm = {
    postMessage: async (req, res) => {
        const body_ = await req.body

        console.log("DB path is: " + DbPath)
        const db = new sqlite3.Database(DbPath, sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.log("Error happened at opening the DB connection: ", err);
                res.send({
                    Message: "Something went wrong, try again."
                })
            } else {
                console.log("Connected to DB Successfully")
            }
        })
        const queryStr = "INSERT INTO users (email, first_name, last_name) VALUES (?, ?, ?)";
        db.run(queryStr, [body_.email, body_.firstName, body_.lastName], (err) =>  {
            if (err) {
                console.log("Error happened at adding data to the DB: ", err);
                res.send({
                    Message: "Something went wrong, try again."
                }) 
            } else {
                res.send({
                    Message: "Thank you for making an account"
                })
            } 
        });
        //console.log(requestContent)
    },
    getMessages: async(req, res) => {
        res.send({message: "Get all submissions"})
    }, 

    getMessageByID: async(req, res) => {
        res.send({message: "Get submission by ID"})
    } 
}

module.exports = handleRegistrationForm