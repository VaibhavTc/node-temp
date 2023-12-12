const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");
// without calling any function or storing in any variable above code works fine
sayHi(names.vaibhav);
sayHi(names.sonu);
sayHi("vaibhav");
console.log(data);
