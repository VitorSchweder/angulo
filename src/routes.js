const routes = require("express").Router();
const AnglesController = require("./app/controllers/AnglesController");

routes.get("/api/clock/:hour/:min?", AnglesController.calculateAngle);

module.exports = routes;
