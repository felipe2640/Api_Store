import SupplierService from '../services/supplier.service.js'
async function createSupplier(req, res, next) {
	try {
		let supplier = req.body;
		if (
			!supplier.name ||
			!supplier.cnpj ||
			!supplier.phone ||
			!supplier.email ||
			!supplier.adress
		) {
			throw new Error("Name,CNPJ, PHONE, Email, e Address são obrigatórios.");
		}
		//SupplierService
		supplier = await SupplierService.createSupplier(supplier)
		res.send(supplier);
		logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
	} catch (err) {
		next(err);
	}
}

async function getSuppliers(req, res, next) {
	try {
		res.send(await SupplierService.getSuppliers())
		logger.info(" GET /supplier")
	} catch (error) {
		next(error)
	}
}

async function getSupplier(req, res, next) {
	try {
		res.send(await SupplierService.getSupplier(req.params.id))
		logger.info(" GET /supplier")
	} catch (error) {
		next(error)
	}
}

async function deleteSupplier(req, res, next) {
	try {
		res.send(await SupplierService.deleteSupplier(req.params.id))
		logger.info(" DELETE /supplier")
	} catch (error) {
		next(error)
	}
}

async function updateSupplier(req, res, next) {
	try {
		let supplier = req.body;
		if (
			!supplier.name ||
			!supplier.cnpj ||
			!supplier.phone ||
			!supplier.email ||
			!supplier.adress ||
			!supplier.supplier_id
		) {
			throw new Error("Name,CNPJ, PHONE, Email, ID, e Address são obrigatórios.");
		}
		//SupplierService
		supplier = await SupplierService.updateSupplier(supplier)
		res.send(supplier);
		logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
	} catch (error) {
		next(error)
	}
}


export default { createSupplier, getSuppliers, getSupplier, deleteSupplier, updateSupplier };
