import { connect } from "./db.js"

async function insertSale(sale) {
    const conn = await connect()
    try {
        const sql = "INSERT INTO sales(client_id, product_id, value, date) VALUES($1, $2, $3, $4) RETURNING *"
        const values = [sale.client_id, sale.product_id, sale.value, sale.date]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (error) {
        throw error
    } finally {
        conn.release()
    }
}

async function getSales() {
    const conn = await connect()
    try {
        const res = await conn.query("SELECT * FROM sales")
        return res.rows
    } catch (error) {
        throw error
    } finally {
        conn.release()
    }
}

async function getSale(id) {
    const conn = await connect()
    try {
        const res = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [id])
        if (res.rows[0] === undefined) {
            throw new Error("Venda não encontrado");
        } else {
            return res.rows[0]

        }
    } catch (error) {
        throw error
    } finally {
        conn.release()
    }
}

async function getSalebyProductId(id) {
    const conn = await connect()
    try {
        const res = await conn.query("SELECT * FROM sales WHERE product_id = $1", [id])
        if (res.rows[0] === undefined) {
            throw new Error("Venda não encontrado");
        } else {
            return res.rows[0]

        }
    } catch (error) {
        throw error
    } finally {
        conn.release()
    }
}


async function deleteSale(id) {
    const conn = await connect()
    try {
        const res = await conn.query("DELETE FROM sales WHERE sale_id = $1", [id])
        return res.rows
    } catch (error) {
        throw error
    } finally {
        conn.release()
    }
}

export default { insertSale, getSales, getSale, deleteSale, getSalebyProductId }