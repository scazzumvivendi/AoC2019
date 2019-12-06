console.log("Fourth day");

countPW = 0;
for (i = 372304; i < 847060; i++) {
	var realDigits = i.toString().split('').map(Number);
	let double = false;
	let ascending = true;
	for (j = 0; j < realDigits.length; j++) {
		if (realDigits[j - 1]) {
			if (realDigits[j - 1] > realDigits[j]) {
				ascending = false;
				break;
			}
			if (realDigits[j - 1] == realDigits[j]) {
				double = true;
			}
		}
	}
	if (!!double && !!ascending) {
		countPW++;
	}
}
console.log("First puzzle");
console.log(countPW);
let countPW2 = 0;
for (i = 372304; i < 847060; i++) {
	var realDigits = i.toString().split('').map(Number);
	let ascending = true;
	let group = {size:1, digit: undefined};
	let oldGroup = {size:1, digit: undefined};
	for (j = 0; j < realDigits.length; j++) {
		if (realDigits[j - 1]) {
			if (realDigits[j - 1] > realDigits[j]) {
				ascending = false;
				break;
			}
			if (realDigits[j - 1] == realDigits[j]) {
				if(!group.digit && oldGroup.digit !== realDigits[j]){
					group.digit = realDigits[j];
				}
				if(realDigits[j] === group.digit && realDigits[j] !== oldGroup.digit){
					group.size++
				}
				if(group.size > 2){
					oldGroup = group;	
					group = {size:1, digit: null};
				}
			}
		}
	}
	if (group.size === 2 && !!ascending) {
		countPW2++;
	}
}
console.log("Second puzzle");
console.log(countPW2);
