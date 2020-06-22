
function test() {
  console.log(`
	  The sequence to study is this: setInterval, 
	  hooks state article, context, regex html and css
	`.replace(/ {2}/g, "").replace(/(\n|\r|\t)/gm, ""));

  console.log(`
	  The sequence to study is this: setInterval, 
	  hooks state article, context, regex html and css
	`.replace(/ {2}/g, "").replace(/(\n|\r|\t)/gm, ""));

  console.log(`
	  The sequence to study is this: setInterval, 
	  hooks state article, context, regex html and css
	`.replace(/ {2}/g, "").replace(/(\n|\r|\t)/gm, ""));
}

const consoleLog = str => {
  console.log(
    str.replace(/ {2}/g, "").replace(/(\n|\r|\t)/gm, "")
  );
};

test();

consoleLog(`
  The sequence to study is this: setInterval, 
  hooks state article, context, regex html and css
`);