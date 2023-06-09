const express = require("express");
const routes = require("./routes");

require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

class App {
	constructor() {
		this.express = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
	}

	routes() {
		this.express.use(routes);
	}
}

module.exports = new App().express;