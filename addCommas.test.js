const addCommas = require("./addCommas");

describe("#addCommas", () => {
	test("it is a function", () => {
		expect(typeof addCommas).toBe("function");
	});

	test("turns 1234 (4 digit num) into '1,234'", () => {
		const num = addCommas(1234);
		expect(num).toEqual("1,234");
	});

	test("turns 1000000 (7 digit num) into '1,000000'", () => {
		const num = addCommas(1000000);
		expect(num).toEqual("1,000,000");
	});

	test("turns 9876543210 (10 digit num) into '9,876,543,210'", () => {
		const num = addCommas(9876543210);
		expect(num).toEqual("9,876,543,210");
	});

	test("turns 6 (1 digit num) into '6'", () => {
		const num = addCommas(6);
		expect(num).toEqual("6");
	});

	test("turns -10 (negative 2 digit num) into '-10'", () => {
		const num = addCommas(-10);
		expect(num).toEqual("-10");
	});

	test("turns -5678 (negative 4 digit num) into '-5678'", () => {
		const num = addCommas(-5678);
		expect(num).toEqual("-5,678");
	});

	test("turns 12345.678 (positive float) into '12,345.678'", () => {
		const num = addCommas(12345.678);
		expect(num).toEqual("12,345.678");
	});

	test("turns -3141592.65 (positive float) into '-3,141,592.65'", () => {
		const num = addCommas(-3141592.65);
		expect(num).toEqual("-3,141,592.65");
	});
});
