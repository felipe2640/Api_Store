import SaleService from '../services/sale.service.js'
async function createSale(req, res, next) {
	try {
		let sale = req.body;
		if (
			!sale.client_id ||
			!sale.product_id ||
			!sale.value ||
			!sale.date
		) {
			throw new Error("Value, Date, Product id e Client id são obrigatórios.");
		}
		//SaleService
		sale = await SaleService.createSale(sale)
		res.send(sale);
		logger.info(`POST /sale - ${JSON.stringify(sale)}`);
	} catch (err) {
		next(err);
	}
}

async function getSales(req, res, next) {
	try {
		res.send(await SaleService.getSales(req.query.product_id))
		logger.info(" GET /sale")
	} catch (error) {
		next(error)
	}
}

async function getSale(req, res, next) {
	try {
		res.send(await SaleService.getSale(req.params.id))
		logger.info(" GET /sale")
	} catch (error) {
		next(error)
	}
}

async function deleteSale(req, res, next) {
	try {
		res.send(await SaleService.deleteSale(req.params.id))
		logger.info(" DELETE /sale")
	} catch (error) {
		next(error)
	}
}




export default { createSale, getSales, getSale, deleteSale };
