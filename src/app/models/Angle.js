const { Model, DataTypes } = require("sequelize");

class Angle extends Model {
	static init(sequelize) {
		super.init(
			{
				hour: DataTypes.INTEGER,
				minute: DataTypes.INTEGER,
				angle: DataTypes.INTEGER,
			},
			{
				sequelize,
			}
		);
	}
}

module.exports = Angle;
