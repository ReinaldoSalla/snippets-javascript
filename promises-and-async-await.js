/*
1-multiple ones, one depending on the other
3-Promise.all
4-Promise.allSettled
*/

const simulateApi = () => (
	Math.random() > 0.5 ? true : false	
);

const learnJavaScript = () => {
	const learned = true
	return new Promise((resolve, reject) => 
		learned 
			? resolve("I'm an expert in JavaScript") 
			: reject("I'm an novice in JavaScript")
	);
};

const learnNode = (jsStatus) => {
	const learned = true;
	return new Promise((resolve, reject) =>
		learned 
			?	resolve(`${jsStatus}\nI'm also an expert in Node`)
			: reject(`${jsStatus}\nI'm also an novice in Node`)
	);
};

const learnReact = (nodeStatus) => {
	const learned = true;
	return new Promise((resolve, reject) => 
		learned
			? resolve(`${nodeStatus}\nI'm also an expert in React`)
			: reject(`${nodeStatus}\nI'm also an novice in React`)
	);
};

const getStatus = () => {
	let status;
	learnJavaScript()
		.then(jsStatus => learnNode(jsStatus))
		.then(nodeStatus => learnReact(nodeStatus))
		.then(reactStatus => status = reactStatus)
		.catch(err => console.error(err))
		.finally(() => console.log(status));
};

/*
const getStatus = async () => {
	let status;
	try {
		status = await learnJavaScript();
	} catch (err) {
		status = err;
	} finally {
		console.log(`I am ${status}`);
	}
};
*/

getStatus();