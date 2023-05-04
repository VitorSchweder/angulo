const Angle = require("../models/Angle");

class AngleService {
	constructor() {
		this.model = Angle;
	}

	async find(hour, min) {
		let filter = { hour };
		if (!min) {
			min = 0;
		}

		filter.minute = min;

		const result = await this.model.findOne({
			attributes: ['angle'],
			where: filter
		});

		return result;
	}

	async create(data) {
		return this.model.create(data);
	}

	async calculate(hour, minute) {
		const result = await this.find(hour, minute);
		if (result) {
			return result;
		}

		let angle = 0;
		if (!minute) {
			minute = 0;
			angle = (30 * hour);

			if (angle > 180) {
				angle = (360 - angle);
			}
		} else {
			const calcHours = (30 * hour) + (0.5 * minute);
            const calcMinutes = (6 * minute);
	
			if (calcHours > calcMinutes) {
				angle = calcHours - calcMinutes;
			} else {
				angle = calcMinutes - calcHours;
			}

			if (angle > 180) {
				angle = (360 - angle);
			}
		}

		await this.create({hour, angle, minute});

		return {'angle': angle};
	}
}

module.exports = new AngleService();
