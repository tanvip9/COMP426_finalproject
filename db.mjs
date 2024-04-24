import {Database} from 'sqlite-async';

export let db = await Database.open('db.sqlite');

await db.run(`CREATE TABLE users (
    user_name STRING PRIMARY KEY,    
    first_name STRING,
    last_name STRING
    )`);

db.close()