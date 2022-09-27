import pg from 'pg'

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        user: 'user',
        host: 'localhost',
        database: 'postgres',
        password: 'password',
        port: 5432,
    })
    global.connection = pool;

    return pool.connect()
}

export { connect }