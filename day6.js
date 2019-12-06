console.log("Fifth day")


async function main() {

	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream('day6.txt')
	});

	const input = [];
	for await (const line of lineReader) {
		input.push(line);
	}
	const output = [];
	let sum = 0;
	for (i of input) {
		let l = i.split(')');
		if (!Object.keys(output).includes(l[0])) {
			output[l[1]] = [l[0]];
		} else {
			output[l[1]] = [...output[l[0]], l[0]];
		}
		for (o of Object.keys(output)) {
			if (output[o].includes(l[1])) {
				output[o].push(...output[l[1]]);
			}
			output[o].filter((e, i) => output[o].indexOf(e) === i);
		}
	}
	for (o of Object.keys(output)) {
		sum = sum + output[o].length;
	}
	console.log("First puzzle: " + sum);


	//TODO find Dijkstra implementation example, then redo the code
	const nodes = {'COM': null};
	input.map(i => i.split(')'))
		.forEach(([parent, name]) => nodes[name] = parent);

	const chain = (parent, links = []) => parent ? chain(nodes[parent], [...links, parent]) : links;
	const intersect = (parent, path, depth = 0) => path.includes(parent) ? depth + path.indexOf(parent) : intersect(nodes[parent], path, depth + 1);
	console.log(`part 2: ${intersect(nodes['SAN'], chain(nodes['YOU']))}`);
}


main();