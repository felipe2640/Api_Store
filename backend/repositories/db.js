import pg from 'pg'
import { configdb } from './../config/db.js'

const { user, host, database, password, port } = configdb;

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        user,
        host,
        database,
        password,
        port,
    })
    global.connection = pool;

    return pool.connect()
}

export { connect }