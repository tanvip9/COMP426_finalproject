import {db} from './db.mjs'

await db.run('CREATE TABLE IF NOT EXISTS users (email STRING PRIMARY KEY, first_name STRING, last_name STRING)');

db.close();