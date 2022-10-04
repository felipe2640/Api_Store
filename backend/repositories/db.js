import pg from 'pg'
import Sequelize from 'sequelize'
import { configdb } from './../config/db.js'

const { user, host, database, password, port } = configdb;


// Not ORM
// async function connect() {
//     if (global.connection) {
//         return global.connection.connect()
//     }
//     const pool = new pg.Pool({
//         user,
//         host,
//         database,
//         password,
//         port,
//     })
//     global.connection = pool;

//     return pool.connect()
// }

// export {connect}


// Use ORM: Sequelize
const sequelize = new Sequelize(
    database, user, password, {
    host, dialect: "postgres", define: {
        timestamps: false
    }
}
)

export default sequelize