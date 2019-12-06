console.log("Advent of code")

console.log("First day")

const input1 = [83133, 130874, 140147, 117477, 144367, 54627, 133133, 65928, 76778, 102928, 135987, 125674, 74597, 136246, 117771, 92413, 64422, 56693, 92601, 54694, 95137, 86188, 126454, 99142, 94487, 53785, 69679, 123479, 124598, 121152, 146564, 101173, 82025, 55187, 84083, 69403, 114456, 84722, 88667, 80619, 121281, 118139, 125808, 54034, 81780, 116401, 136396, 137830, 108481, 103712, 144950, 85621, 57973, 99549, 107704, 115782, 83445, 91681, 87607, 52745, 76839, 61881, 73658, 102315, 100651, 72929, 124015, 134764, 135088, 127294, 66563, 100125, 83062, 91212, 143130, 78993, 58940, 120981, 110504, 142779, 95328, 135936, 84490, 112005, 101554, 111185, 124249, 126525, 96909, 145482, 140368, 83014, 77784, 130376, 79031, 122317, 100188, 66679, 89074, 120969];

let tot1 = 0;
for (i of input1) {
	m = Math.floor(i / 3) - 2;
	tot1 = tot1 + m;
}

console.log("First puzzle: " + tot1);

let tot2 = 0;
for (i of input1) {
	let res = i;
	while (res > 3) {
		res = Math.floor(res / 3) - 2;
		if (res > 0) {
			tot2 = tot2 + res;
		}
	}
}

console.log("Second puzzle: " + tot2);