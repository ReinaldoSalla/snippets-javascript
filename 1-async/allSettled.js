const simulateApi = () => (
	Math.random() > 0.5 ? true : false	
);

const learnJavaScript = () => {
	const learned = true;
	return new Promise((resolve, reject) => 
		learned 
			? resolve("I am an expert in JavaScript") 
			: reject("I am an novice in JavaScript\nNeed to study")
	);
};

const learnNode = (jsStatus) => {
	const learned = false;
	return new Promise((resolve, reject) =>
		learned 
			?	resolve(`I am an expert in Node`)
			: reject(`I am an novice in Node\nNeed to study`)
	);
};

const learnReact = (nodeStatus) => {
	const learned = false;
	return new Promise((resolve, reject) => 
		learned
			? resolve(`I am an expert in React`)
			: reject(`I am an novice in React\nNeed to study`)
	);
};


const allSettled = promises => {
	return Promise.all(promises.map(promise => 
		Promise.resolve(promise)
			.then(val => ({ status: "fulfilled", value: val }))
			.catch(err => ({ status: "rejected", reason: err }))
	));
};

const separateResults = results => [
	results
		.filter(result => result.status === "fulfilled")
		.map(result => result.value),
	results
		.filter(result => result.status === "rejected")
		.map(result => result.reason)
];

/*
const getStatus = () => {
	allSettled([learnJavaScript(), learnNode(), learnReact()])
		.then(results => console.log(results));
};
*/

const getStatus = async () => {
	const results = await allSettled([learnJavaScript(), learnNode(), learnReact()]);
	const [fulfilled, rejected] = separateResults(results);
	console.log("promises fulfilled");
	fulfilled.forEach(item => console.log(item));
	console.log();
	console.log("promises rejected");
	rejected.forEach(item => console.log(item));
};

getStatus();

console.log("top level\n");