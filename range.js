/*
Create an array for a range of numbers throught generators
range(10)       = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(2, 10)    = [2, 3, 4, 5, 6, 7, 8, 9]
range(2, 2, 10) = [2, 4, 6, 8]
*/

function* genRange(current, increment, end) {
	if (current === end) return;
	yield current;
	yield* genRange(current + increment, increment, end);
}

function range(arg1, arg2, arg3) {
	if (!arg2 && !arg3) return [...genRange(0, 1, arg1)]
	else if (!arg3) return [...genRange(arg1, 1, arg2)];
	else return [...genRange(arg1, arg2, arg3)]
}

const nums = range(1000);

console.log(
	typeof Array.isArray(nums) 
		? `nums is an array with the following numbers: ${nums}` 
		: `nums is not an array`
);