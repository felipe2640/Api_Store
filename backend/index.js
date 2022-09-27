import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js";
import productsRoute from "./routes/product.route.js";
import salesRoute from "./routes/sale.route.js";
import suppliersRouter from "./routes/supplier.route.js";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
	level: "silly",
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: "store-api.log" }),
	],
	format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", productsRoute);
app.use("/sale", salesRoute);
app.use("/supplier", suppliersRouter);
app.use((err, req, res, next) => {
	logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
	res.status(400).send({ error: err.message });
});
app.listen(3000, () => console.log("Api Started "));
