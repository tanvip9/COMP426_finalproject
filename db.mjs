import {Database} from 'sqlite-async';
export let db = await Database.open('db.sqlite');

async function setupDatabase() {
        //const db = await Database.open('./data.db');
        await db.run(`CREATE TABLE IF NOT EXISTS users (
            user_name STRING PRIMARY KEY,
            first_name STRING,
            last_name STRING
        )`);
        return db;
    }

console.log("Users is created");

export default setupDatabase;
