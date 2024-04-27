-- SQLite

CREATE TABLE IF NOT EXISTS users (
            email STRING PRIMARY KEY,
            first_name STRING,
            last_name STRING
        )

SELECT * FROM sqlite_master where type = "table";