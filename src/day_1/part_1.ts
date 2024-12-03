const inputFilePath = `${Deno.cwd()}/src/day_1/input.txt`;
const inputText = await Deno.readTextFile(inputFilePath);
const locations = inputText.split('\n').slice(0, -1);

const listOne = [];
const listTwo = [];

for (const pair of locations) {
	const [x, , , y] = pair.split(' ');
	listOne.push(Number.parseInt(x));
	listTwo.push(Number.parseInt(y));
}

listOne.sort();
listTwo.sort();

let totalDistance = 0;

for (let i = 0; i < listOne.length; i++) {
	totalDistance += Math.abs(listOne[i] - listTwo[i]);
}

console.log(totalDistance);
