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

const learnNode = jsStatus => {
	const learned = true;
	return new Promise((resolve, reject) =>
		learned 
			?	resolve(`${jsStatus}\nI am an expert in Node`)
			: reject(`${jsStatus}\nI am an novice in Node\nNeed to study`)
	);
};

const learnReact = nodeStatus => {
	const learned = true;
	return new Promise((resolve, reject) => 
		learned
			? resolve(`${nodeStatus}\nI am an expert in React`)
			: reject(`${nodeStatus}\nI am an novice in React. Need to study`)
	);
};

/*
const getStatus = () => {
	let status;
	learnJavaScript()
		.then(jsStatus => learnNode(jsStatus))
		.then(nodeStatus => learnReact(nodeStatus))
		.then(reactStatus => status = reactStatus)
		.catch(err => status = err)
		.finally(() => console.log(status));
};
*/

const getStatus = async () => {
	let status;
	try {
		const jsStatus = await learnJavaScript();
		const nodeStatus = await learnNode(jsStatus);
		const reactStatus = await learnReact(nodeStatus)
		status = reactStatus;
	} catch (err) {
		status = err;
	} finally {
		console.log(`${status}`);
	}
};

getStatus();