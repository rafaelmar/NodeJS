import sql from './db.js'

sql`DROP TABLE IF EXISTS videos`.then(() => {
    console.log('Table dropped successfully')
})

sql`
    CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT
)`
.then(() => {
    console.log('Table created successfully')
})