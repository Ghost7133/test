const firstGroupTest = require(`./firstGroupTest`);

test("adds 1+2 to equal 3", () => {
	expect(firstGroupTest(5, 4, 3).toBe("Треугольник является разносторонним"));
});
