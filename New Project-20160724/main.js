//Single Function Only
var add = require("./add");
console.log("Addition Function Only: "+add(2,5));

//Multiple Functions (Calc)
var calc = require("./calc");
console.log("Calc Functions: "+calc.sub(10,2));
console.log("Calc Functions: "+calc.add(10,2));