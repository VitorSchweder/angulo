const Sequelize = require("sequelize");
const dbConfig = require("../config");

const Angle = require("../app/models/Angle");

const connection = new Sequelize(dbConfig.database);

Angle.init(connection);

module.exports = connection;
