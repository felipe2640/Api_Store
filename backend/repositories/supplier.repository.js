// With not ORM
// import {connect} from "./db.js"

import Suppliers from '../models/supplier.model.js'

async function insertSupplier(supplier) {
    //Com ORM
    try {
        return await Suppliers.create(supplier)
    } catch (error) {
        throw error
    }
    // Sem ORM
    // const conn = await connect()
    // try {
    //     const sql = "INSERT INTO suppliers(name, cnpj, phone, email, adress) VALUES($1, $2, $3, $4, $5) RETURNING *"
    //     const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.adress]
    //     const res = await conn.query(sql, values)
    //     return res.rows[0]
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function getSuppliers() {
    //Com ORM
    try {
        return await Suppliers.findAll()
    } catch (error) {
        throw error
    }

    //Sem ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("SELECT * FROM suppliers")
    //     return res.rows
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function getSupplier(id) {
    //Com ORM
    try {
        return await Client.findByPk(id)
    } catch (error) {
        throw error
    }

    //Sem ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("SELECT * FROM suppliers WHERE suppliers_id = $1", [id])
    //     if (res.rows[0] === undefined) {
    //         throw new Error("Suppliers não encontrado");
    //     } else {
    //         return res.rows[0]

    //     }
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function updateSupplier(supplier) {
    //Com ORM
    try {
        await Suppliers.update(supplier, {
            where: {
                supplierId: supplier.supplierId
            }
        })
        return await getSuppliers(supplier.supplierId)
    } catch (error) {
        throw error
    }

    //Sem ORM
    // const conn = await connect()
    // try {
    //     const sql = "UPDATE suppliers SET name = $1, cnpj = $2, phone = $3, email = $4, adress = $5 WHERE suppliers_id = $6 RETURNING *"
    //     const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.adress, supplier.supplier_id]
    //     const res = await conn.query(sql, values)
    //     if (res.rows[0] === undefined) {
    //         throw new Error("Suppliers não encontrado");
    //     } else {
    //         return res.rows[0]

    //     }
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function deleteSupplier(id) {
    //Com ORM
    try {
        await Suppliers.destroy({
            where: {
                supplierId: id
            }
        })
    } catch (error) {
        throw error
    }

    //Sem ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("DELETE FROM suppliers WHERE suppliers_id = $1", [id])
    //     return res.rows
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

export default { insertSupplier, getSuppliers, getSupplier, updateSupplier, deleteSupplier }