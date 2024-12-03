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

const frequncyMap = new Map<number, number>();

for (const num of listTwo) {
	const currentCount = frequncyMap.get(num) ?? 0;
	frequncyMap.set(num, currentCount + 1);
}

let similarityScore = 0;

for (const num of listOne) {
	const numFrequncy = frequncyMap.get(num) ?? 0;
	similarityScore += num * numFrequncy;
}

console.log(similarityScore);
