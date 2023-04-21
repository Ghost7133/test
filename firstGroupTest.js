function firstGroupTest(a, b, c) {
	if (a > 0 && b > 0 && c > 0 && a != 0 && b != 0 && c != 0) {
		if (
			a + b > c &&
			a + c > b &&
			b + a > c &&
			b + c > a &&
			c + a > b &&
			c + b > a
		) {
			if ((a == b) == c) return "Треугольник является равносторонним";
			else if (a == b || b == c || a == c)
				return "Треугольник является равнобедренным";
			else return "Треугольник является разносторонним";
		} else return "Сумма двух из чисел больше третьего";
	} else return "Одно из чисел <= 0";
}
module.exports = firstGroupTest;
