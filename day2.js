console.log("Second day")

//const test2 = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]

const creationInput2 = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 6, 19, 1, 5, 19, 23, 1, 23, 6, 27, 1, 5, 27, 31, 1, 31, 6, 35, 1, 9, 35, 39, 2, 10, 39, 43, 1, 43, 6, 47, 2, 6, 47, 51, 1, 5, 51, 55, 1, 55, 13, 59, 1, 59, 10, 63, 2, 10, 63, 67, 1, 9, 67, 71, 2, 6, 71, 75, 1, 5, 75, 79, 2, 79, 13, 83, 1, 83, 5, 87, 1, 87, 9, 91, 1, 5, 91, 95, 1, 5, 95, 99, 1, 99, 13, 103, 1, 10, 103, 107, 1, 107, 9, 111, 1, 6, 111, 115, 2, 115, 13, 119, 1, 10, 119, 123, 2, 123, 6, 127, 1, 5, 127, 131, 1, 5, 131, 135, 1, 135, 6, 139, 2, 139, 10, 143, 2, 143, 9, 147, 1, 147, 6, 151, 1, 151, 13, 155, 2, 155, 9, 159, 1, 6, 159, 163, 1, 5, 163, 167, 1, 5, 167, 171, 1, 10, 171, 175, 1, 13, 175, 179, 1, 179, 2, 183, 1, 9, 183, 0, 99, 2, 14, 0, 0]

function calc2(int1, int2) {
	let input2;
	input2 = Object.assign([], creationInput2);
	input2[1] = int1;
	input2[2] = int2;
	for (i = 0; i < input2.length; i = i + 4) {
		switch (input2[i]) {
			case 1:
				const idx11 = input2[i + 1];
				const idx12 = input2[i + 2];
				const idx13 = input2[i + 3];
				input2[idx13] = input2[idx12] + input2[idx11];
				break;
			case 2:
				const idx21 = input2[i + 1];
				const idx22 = input2[i + 2];
				const idx23 = input2[i + 3];
				input2[idx23] = input2[idx21] * input2[idx22];
				break;
			case 99:
				return input2[0];
		}
	}
}
console.log("First puzzle: " + calc2(12, 2));

let res2 = 8051;
//for (i2 = 0; i2 < 1000; i2++) {
// for (j2 = 0; j2 < 1000; j2++) {
//  const res = calc2(i2, j2);
// if (res === 19690720) {
//  res2 = 100 * i2 + j2;
// break;
//break;
//}
//}
//}


console.log("Second puzzle: " + res2);