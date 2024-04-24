// import {Database} from 'sqlite-async';
//import sqlite from 'sqlite-async';
import * as sqlite3 from 'sqlite-async';
//import sqlite3 from 'sqlite';


// const db = new sqlite.Database('./data.db', (err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("db connected");
//         db.run(`CREATE TABLE users (
//             user_name STRING PRIMARY KEY,    
//             first_name STRING,
//             last_name STRING
//             )`);
//     }
// });







// async function setupDatabase() {
//     try {
//         //const db = await sqlite.default.open('./data.db');
//         const db = new sqlite.Database('./data.db');
//         //const db = await sqlite.open({ filename: './data.db', driver: sqlite.Database });
//         db.open('./data.db');
//         await db.run(`CREATE TABLE IF NOT EXISTS users (
//             user_name TEXT PRIMARY KEY,
//             first_name TEXT,
//             last_name TEXT
//         )`);
//         console.log('Database setup successful.');
//         return db;
//     } catch (error) {
//         console.error('Error setting up database:', error);
//         throw error;
//     }
// }
// export default setupDatabase();

// //export let db = await Database.open('db.sqlite');

//export{db};
// //db.close()


// import Database from 'sqlite-async';

async function setupDatabase() {

    const db = await Database.open('./data.db');
    await db.run(`CREATE TABLE IF NOT EXISTS users (
        user_name STRING PRIMARY KEY,
        first_name STRING,
        last_name STRING
    )`);
    return db;
}

export default setupDatabase();


// async function setupDatabase() {
//     try {
//         const db = await sqlite3.open({ filename: './data.db', driver: sqlite.Database });
//         await db.run(`CREATE TABLE IF NOT EXISTS users (
//             user_name TEXT PRIMARY KEY,
//             first_name TEXT,
//             last_name TEXT
//         )`);
//         console.log('Database setup successful.');
//         return db;
//     } catch (error) {
//         console.error('Error setting up database:', error);
//         throw error;
//     }
// }

//export default setupDatabase;
