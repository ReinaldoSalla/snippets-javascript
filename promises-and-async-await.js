const simulateApi = () => 
	Math.random() > 0.5 ? true : false;

const learnJavaScript = () => {
	const learned = simulateApi();
	return new Promise((resolve, reject) => 
		learned 
			? resolve("an expert in JavaScript") 
			: reject("an novice in JavaScript")
	);
};

const learnNode = () => {
	const learned = true;
	return new Promise((resolve, reject) =>
		learned 
			?	resolve("an expert in Node")
			: resolve("an novice in Node")
	);
};

/*
const getStatus = () => {
	let status;
	learnJavaScript()
		.then(result =>	{
			status = result
		})
		.catch(err => {
			status = err
		})
		.finally(() => 
			console.log(`I am ${status}`)
		);
};
*/

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