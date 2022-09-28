import ClientRepository from "../repositories/client.repository.js"
import SaleRepository from "../repositories/sale.repository.js"
import ProductRepository from "../repositories/product.repository.js"

async function createSale(sale) {
    if (await ClientRepository.getClient(sale.client_id)) {
        const product = await ProductRepository.getProduct(sale.product_id)
        if (product > 0) {
            sale = await SaleRepository.insertSale(sale)
            product.stock--;
            await ProductRepository.updateProduct(product)
            return sale
        } else {
            throw new Error("O produto informado não tem estoque")
        }
    }
}
async function getSales(productId) {
    if (productId) {
        const product = await ProductRepository.getProduct(sale.product_id)
        if (product) {
            return await SaleRepository.getSalebyProductId(productId)
        }
    } else {
        return await SaleRepository.getSales()

    }
}

async function getSale(id) {
    return await SaleRepository.getSale(id)
}

async function deleteSale(id) {
    const sale = await SaleRepository.getSale(id)
    if (sale) {
        if (await ClientRepository.getClient(sale.client_id)) {
            const product = await ProductRepository.getProduct(sale.product_id)
            if (product) {
                product.stock++;
                await ProductRepository.updateProduct(product)
                await SaleRepository.deleteSale(id)

            } else {
                throw new Error("O produto informado não tem estoque")
            }
        }

    }
}

export default { createSale, getSales, getSale, deleteSale }