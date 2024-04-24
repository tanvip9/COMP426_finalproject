// import express from 'express';
// import bodyParser from 'body-parser';
// import setupDatabase from './db.mjs';

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(express.static('public'));  // Serve your CSS/HTML files

// setupDatabase.then(db => {
//     app.post('/submit-form', async (req, res) => {
//         const { email, firstName, lastName } = req.body;
//         try {
//             await db.run('INSERT INTO users (user_name, first_name, last_name) VALUES (?, ?, ?)', [email, firstName, lastName]);
//             res.json({ message: 'Data saved successfully' });
//         } catch (error) {
//             console.error(error.message);
//             res.status(500).json({ error: 'Failed to insert data' });
//         }
//     });

//     app.listen(port, () => {
//         console.log(`Server running on http://localhost:${port}`);
//     });
// });


import express from 'express';
import bodyParser from 'body-parser';
import * as sqlite3 from 'sqlite-async';
import setupDatabase from './db.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your CSS/HTML files

setupDatabase().then(db => {
    app.post('/submit-form', async (req, res) => {
        const { email, firstName, lastName } = req.body;
        try {
            await db.run('INSERT INTO users (user_name, first_name, last_name) VALUES (?, ?, ?)', [email, firstName, lastName]);
            res.json({ message: 'Data saved successfully' });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Failed to insert data' });
        }
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Error setting up database:', error);
});
