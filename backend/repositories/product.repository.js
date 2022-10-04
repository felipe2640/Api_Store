// With not ORM
// import {connect} from "./db.js"

import Product from '../models/product.model.js'

async function insertProduct(product) {
    // With ORM
    try {
        return await Product.create(product)
    } catch (error) {
        throw error
    }

    // With not ORM
    // const conn = await connect()
    // try {
    //     const sql = "INSERT INTO products(name, description, value, stock, supplier_id) VALUES($1, $2, $3, $4, $5) RETURNING *"
    //     const values = [product.name, product.description, product.value, product.stock, product.supplier_id]
    //     const res = await conn.query(sql, values)
    //     return res.rows[0]
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function getProducts() {
    // With ORM
    try {
        return await Product.findAll()
    } catch (error) {
        throw error
    }

    // With not ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("SELECT * FROM products")
    //     return res.rows
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function getProduct(id) {
    // With ORM
    try {
        return await Product.findByPk(id)
    } catch (error) {
        throw error
    }

    // With not ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("SELECT * FROM products WHERE product_id = $1", [id])
    //     if (res.rows[0] === undefined) {
    //         throw new Error("Usuário não encontrado");
    //     } else {
    //         return res.rows[0]

    //     }
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function updateProduct(product) {
    // With ORM
    try {
        await Product.update(product, {
            where: {
                productId: product.productId
            }
        })
        return await getProduct(product.productId)
    } catch (error) {
        throw error
    }

    // With not ORM
    // const conn = await connect()
    // try {
    //     const sql = "UPDATE products SET name = $1, description = $2, value = $3, stock = $4, supplier_id = $5 WHERE product_id = $6 RETURNING *"
    //     const values = [product.name, product.description, product.value, product.stock, product.supplier_id, product.product_id]
    //     const res = await conn.query(sql, values)
    //     if (res.rows[0] === undefined) {
    //         throw new Error("Usuário não encontrado");
    //     } else {
    //         return res.rows[0]

    //     }
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

async function deleteProduct(id) {
    // With ORM
    try {
        await Product.destroy({
            where: {
                productId: id
            }
        })
    } catch (error) {
        throw error
    }

    // With not ORM
    // const conn = await connect()
    // try {
    //     const res = await conn.query("DELETE FROM products WHERE product_id = $1", [id])
    //     return res.rows
    // } catch (error) {
    //     throw error
    // } finally {
    //     conn.release()
    // }
}

export default { insertProduct, getProducts, getProduct, updateProduct, deleteProduct }