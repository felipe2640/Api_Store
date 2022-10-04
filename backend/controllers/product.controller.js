import ProductService from '../services/product.service.js'
async function createProduct(req, res, next) {
	try {
		let product = req.body;
		if (
			!product.name ||
			!product.description ||
			!product.value ||
			!product.stock ||
			!product.supplierId
		) {
			throw new Error("Name,Description , Value, Stock, e Suppler id são obrigatórios.");
		}
		//ProductService
		product = await ProductService.createProduct(product)
		res.send(product);
		logger.info(`POST /product - ${JSON.stringify(product)}`);
	} catch (err) {
		next(err);
	}
}

async function getProducts(req, res, next) {
	try {
		res.send(await ProductService.getProducts())
		logger.info(" GET /products")
	} catch (error) {
		next(error)
	}
}

async function getProduct(req, res, next) {
	try {
		res.send(await ProductService.getProduct(req.params.id))
		logger.info(" GET /product")
	} catch (error) {
		next(error)
	}
}

async function deleteProduct(req, res, next) {
	try {
		res.send(await ProductService.deleteProduct(req.params.id))
		logger.info(" DELETE /product")
	} catch (error) {
		next(error)
	}
}

async function updateProduct(req, res, next) {
	try {
		let product = req.body;
		if (
			!product.name ||
			!product.description ||
			!product.value ||
			!product.stock ||
			!product.productId ||
			!product.supplierId
		) {
			throw new Error("Name, Description , Value, Stock, Product id, e Suppler id são obrigatórios.");
		}
		//ProductService
		product = await ProductService.updateProduct(product)
		res.send(product);
		logger.info(`PUT /product - ${JSON.stringify(product)}`);
	} catch (error) {
		next(error)
	}
}




export default { createProduct, getProducts, getProduct, deleteProduct, updateProduct };
