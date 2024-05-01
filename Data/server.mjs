import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3001;


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use("/registration", express.static('public'));
app.use(bodyParser.json());
    
import {db} from './db.mjs';

    // app.get('/registration', (req, res) => {
    //     res.json(req.body);
    // });

    app.post("/api/registration", async (req, res) => {
        const{email, firstName, lastName, login} = req.body;
        console.log(email);
        console.log("Hello World");

        //Checking if the email exists:
        const userExists = await checkUserExists(email, login);
        if (userExists) {
        return res.status(400).json({ message: "Email or login already exists" });
        }
        
        const queryStr = "INSERT INTO users (email, first_name, last_name) VALUES (?, ?, ?)";
        db.run(queryStr, [email, firstName, lastName], (err) =>  {
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
        //return res.sendStatus(201).json("Success!");
    });

    // app.get("/api/login", async (req, res) => {
    //     let email = req.query;
    //     console.log("retrieved email:" + email)
    //     const queryStr = "Select first_name FROM users WHERE email = (?)";
    //     db.run(queryStr, [email]);
    //     console.log("After DB")
    // });

    app.get("/api/email", async (req, res) => {
        let email = req.body; // Retrieve email from query parameters
        console.log("Retrieved email: " + email);
        
        const queryStr = "SELECT first_name FROM users WHERE email = ?";
        db.get(queryStr, [email], (err, row) => {
          if (err) {
            console.error("Error retrieving data from the database:", err);
            res.status(500).json({ error: "Failed to retrieve data" });
          } else {
            if (row) {
              console.log("First name:", row.first_name);
              res.status(200).json({ firstName: row.first_name });
            } else {
              console.log("User not found");
              res.status(404).json({ message: "User not found" });
            }
          }
        });
      });
    // app.post('/registration', (req, res) => {
    //     const{email, firstName, lastName} = req.body;
    //     console.log(email);
    //     console.log("Hello World");
        
    //     const queryStr = "INSERT INTO users (email, first_name, last_name) VALUES (?, ?, ?)";
    //     db.run(queryStr, [email, firstName, lastName], (err) =>  {
    //         if (err) {
    //             console.log("Error happened at adding data to the DB: ", err);
    //             res.send({
    //                 Message: "Something went wrong, try again."
    //             }) 
    //         } else {
    //             res.send({
    //                 Message: "Thank you for making an account"
    //             })
    //         } 
    //     });
    //     //return res.sendStatus(201).json("Success!");
    // });


    

    // app.post("/api/checkUserExists", (req, res) => {
    //     const { email } = req.body;
    //     try {
    //       const userExists = checkUserExists(email);
    //       console.log("await done");
    //       console.log(userExists);
    //       res.status(200).json({ exists: userExists });
    //     } catch (error) {
    //       console.error("Error checking user existence:", error);
    //       res.status(500).json({ message: "An error occurred while checking user existence" });
    //     }
    //   });


      app.post("/api/checkUserExists", (req, res) => {
        const { email } = req.body;
        console.log("pre-query");
        const queryStr = "SELECT COUNT(*) AS count FROM users WHERE email =(?)";
        db.get(queryStr, [email], (err, row) => {
            if (err) {
                console.error("Error checking user existence:", err);
                res.status(500).json({ message: "An error occurred while checking user existence" });
                return;
            }
            const userExists = row.count > 0;
            console.log("User exists:", userExists);
            res.status(200).json({ exists: userExists });
        });
    });
    

    //   const checkUserExists = (email) => {
    //     return new Promise((resolve, reject) => {
    //         console.log("in promise");
    //         const queryStr = "SELECT COUNT(*) AS count FROM users WHERE email = ?";
    //         db.get(queryStr, [email], (err, row) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(row.count > 0);
    //             }
    //         });
    //         console.log("db evaluated");
    //     });
    // };

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
