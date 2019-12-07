console.log("Seventh day")

//const test2 = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]

const creationInput7 = [3,8,1001,8,10,8,105,1,0,0,21,42,63,76,101,114,195,276,357,438,99999,3,9,101,2,9,9,102,5,9,9,1001,9,3,9,1002,9,5,9,4,9,99,3,9,101,4,9,9,102,5,9,9,1001,9,5,9,102,2,9,9,4,9,99,3,9,1001,9,3,9,1002,9,5,9,4,9,99,3,9,1002,9,2,9,101,5,9,9,102,3,9,9,101,2,9,9,1002,9,3,9,4,9,99,3,9,101,3,9,9,102,2,9,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,99]
//const creationInput7 = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,    1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0];

function intComp7(int1, int2) {
    let input7 = Object.assign([], creationInput7);
    a = 4;
    let result = [];
    i = 0;
    while (i < input7.length) {
        const inst1 = input7[i].toString();
        let inst, modes = [];
        if (inst1.length > 2) {
            inst = Number(inst1.substring(inst1.length - 2, inst1.length));
            modes = [Number(inst1[inst1.length - 5]), Number(inst1[inst1.length - 4]), Number(inst1[inst1.length - 3])];
            while (!modes[0]) {
                modes.splice(0, 1);
            }
            modes = modes.reverse();
        } else {
            inst = Number(inst1);
        }
        switch (inst) {
            case 1:
            const val11 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val12 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            const idx13 = input7[i + 3];
            input7[idx13] = val11 + val12;
            i = i + 4;
            break;
            case 2:
            const val21 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val22 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            const idx23 = input7[i + 3];
            input7[idx23] = val21 * val22;
            i = i + 4;
            break;
            case 3:
            const idx31 = input7[i + 1];
            if(!!int1){
                input7[idx31] = Number(int1);
                int1 = 0;
            } else {
                input7[idx31] = Number(int2);
            }
            i = i + 2;
            break;
            case 4:
            const output = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            result.push(output);
            i = i + 2;
            break;
            case 5:
            const val51 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val52 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            if (!!val51) {
                i = val52;
            } else {
                i = i + 1;
            }
            break;
            case 6:
            const val61 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val62 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            if (!val61) {
                i = val62;
            } else {
                i = i + 1;
            }
            break;
            case 7:
            const val71 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val72 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            const idx73 = input7[i + 3];
            if (val71 < val72) {
                input7[idx73] = 1;
            } else {
                input7[idx73] = 0;
            }
            i = i + 4;
            break;
            case 8:
            const val81 = !!modes[0] ? input7[i + 1] : input7[input7[i + 1]];
            const val82 = !!modes[1] ? input7[i + 2] : input7[input7[i + 2]];
            const idx83 = input7[i + 3];
            if (val81 == val82) {
                input7[idx83] = 1;
            } else {
                input7[idx83] = 0;
            }
            i = i + 4;
            break;
            case 99:
            return result;
        }
        
    }
}

function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}
function createInputs(input) {
        var counter = [],
            anagrams = [],
            chars = input.split(''),
            i;
        for (i = 0; i < chars.length; i++) {
            counter[i] = 0;
        }
        anagrams.push(input);
        i = 0;
        while (i < chars.length) {
            counter[i]<i ? (swap(chars, i % 2 === 1 ? counter[i] : 0, i),counter[i]++, i =0,  anagrams.push(chars.join(''))) : (counter[i] = 0, i++)
        }
    
        return anagrams;
}

maxThrust = 0;
function calc7(){
    inputs = createInputs('01234');
    for(input of inputs){
        thrust = Number( intComp7(input[4], intComp7(input[3],intComp7(input[2],intComp7(input[1],intComp7(input[0], 0))))));
        if(maxThrust<thrust){
            maxThrust = thrust;
        }
    };
    return maxThrust;
}

function calc72(){
    
    //TODO second puzzle
    return '58285150';
}

console.log("First puzzle: " + calc7());
console.log("Second puzzle: " + calc72());