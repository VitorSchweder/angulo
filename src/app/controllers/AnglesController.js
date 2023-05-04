const AngleService = require("../services/AngleService");

let validHours = [];
for (let i=1;i<24;i++) {
	validHours.push(i);
}

let validMinutes = [];
for (let i=1;i<60;i++) {
	validMinutes.push(i);
}

class AnglesController {
	async calculateAngle(req, res) {
		const { hour, min } = req.params;
		let result = null;

		try {
			if (validHours.indexOf(parseInt(hour)) <= 0) {
                throw new Error("Informe um hora válida.");
			}

			if (min && validMinutes.indexOf(parseInt(min)) <= 0) {
                throw new Error("Informe um minuto válido.");
			}

			result = await AngleService.calculate(hour, min);	
			return res.json(result);
		} catch (e) {
			return res.status(500).json({
				success: false,
				message: e.toString(),
			});
		}
	}
}

module.exports = new AnglesController();
