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
	const learned = true;
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

const getStatus = () => {
	Promise.all([learnJavaScript(), learnNode(), learnReact()])
		.then(results => {
			results.forEach(result => console.log(result));
		})
		.catch(err => console.error(err));
}

getStatus();