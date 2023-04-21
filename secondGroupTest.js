function secondGroupTest(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || c + b <= a || a + c <= b)
		return "Введенные данные не могут являться сторонами треугольника";
	p = (a + b + c) / 2;
	S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
	if ((a == b) == c)
		return `Треугольник равносторонний, площадь: ${S.toFixed(2)}`;
	else if (a == b || a == c || b == c)
		return `Треугольник равнобедренный, площадь:  ${S.toFixed(2)} `;
	else if (
		a ** 2 + b ** 2 == c ** 2 ||
		b ** 2 + c ** 2 == a ** 2 ||
		a ** 2 + c ** 2 == b ** 2
	)
		return `Треугольник прямоугольный, площадь:  ${S.toFixed(2)}`;
	else return `Треугольник остроугольный, площадь: ${S.toFixed(2)}`;
}
module.exports = secondGroupTest;
