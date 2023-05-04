const Angle = require("../../src/app/models/Angle");
const truncate = require("../utils/truncate");

describe("Angle", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create data as expected", async () => {
		const result = await Angle.create({
			hour: 14,
			minute: 20,
			angle: 50
		});

		return expect(result.angle).toBe(50);
	});

	it("should find and return as expected", async () => {
		await Angle.create({
			hour: 6,
			minute: 0,
			angle: 180
		});

		const result = await Angle.findOne({
			attributes: ['angle'],
			where: {
				hour: 6,
				minute: 0
			}
		});

		return expect(result.angle).toBe(180);
	});
});
