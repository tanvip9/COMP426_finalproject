import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/registration", express.static('public'));
app.use(bodyParser.json());
    
import {db} from './db.mjs';

    app.get('/registration', (req, res) => {
        res.json(req.body);
    });

    app.post('/registration', (req, res) => {
        const{email, firstName, lastName} = req.body;
        console.log(email);
        console.log("Hello World");
        
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
        return res.sendStatus(201).json("Success!");
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
