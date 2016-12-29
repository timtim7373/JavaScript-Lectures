/* console.log("Task 1");
function summ (x, y)
{
	var s = x + y;
	return s;
}
console.log(summ(35, 70));

console.log("Task 2");
function isPositive(x)
{
	if ( typeof x == "number" && x > 0) return true;
	else return false;
}
var c = isPositive(57);
console.log(isPositive(57));

console.log("Task 3");
function toBoolean(x)
{
	var a = !!x;
	console.log(a);
	return a;
}
var b = toBoolean(5);

console.log(toBoolean(1));
console.log(toBoolean(0));
console.log(toBoolean("as"));
console.log(toBoolean(""));
console.log(toBoolean(null));
console.log(toBoolean([]));
console.log(toBoolean(undefined)); */
/* 
function greeting(name)
{
	if (typeof name === "string" && name)
	return console.log("Hello, "+name);
  else return console.log ("Wrong name");
}

function square(x)
{
	var a = x*x;
	if (typeof x !== "number")
	return console.log("Wrong x");
	else return console.log ("Square x = ", a);
}

function powerOrNot(x)
{
	if (x%2 == 0) 
	return x*x;
  else if (x%3 == 0)
	return x*x*x;
  else return x;
}
/* greeting("Tymofii");
greeting(null);
greeting(undefined); */
/* 
square(2);
square("");
square(null);
square(0);
square(-5);
square(NaN);
 */
 
/* console.log(powerOrNot(2));
console.log(powerOrNot(3));
console.log(powerOrNot(6));
console.log(powerOrNot(5)); */

function getType(x)
{
	if (Array.isArray(x)==true) return "array";
	else if (typeof x == "number") return "number";
	else if (typeof x == "string") return "string";
	else if (typeof x == null) return null;
	else if (typeof x == "object") return "object";

}
console.log(getType([4, 2, "text"]));
console.log(Math.sqrt(4));

function getLengthOfHyp(x1, x2, y1, y2, x3, y3, x4, y4)
{
	var a = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); // Math.pow (2, 3): vozvesti 2 v 3'u stepen'
	var b = Math.sqrt((x4-x3)*(x4-x3)+(y4-y3)*(y4-y3));
	var c = Math.sqrt(a*a+b*b);
	return c;
}

consolsole.log(getType(null));
consolsole.log(getType(NaN));
consolsole.log(getType([1, 2, 3]));
consolsole.log(getType(undefined));
consolsole.log(getType(""));
consolsole.log(getType(123));
consolsole.log(getType(0));
consolsole.log(getType(function () {}));
consolsole.log(getType({}));




























