09-12-2022

Object.entries() makes it simple to use objects in loops:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = {Bananas:500, Apples:300, Mango:500};
let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
text += fruit + "," + amount + "<br>";
}    
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================

Object.entries() also makes it simple to convert objects to maps:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
const myMap = new Map(Object.entries(fruits));
document.getElementById("demo").innerHTML = myMap;
</script>
</body>
</html>

=========================================================================================================

JavaScript Object Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ganesh",
    lastName: "Ananda",
    age: 35,
    eyeColor: "red"
};
let text = Object.values(person)
document.getElementById("demo").innerHTML = text;    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Async Functions

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
async function myDisplay() {
let myPromise = new Promise(function(resolve) {
setTimeout(function() {resolve("I love You !!");}, 3000);
});
document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
</script>
</body>
</html>

=========================================================================================================

ECMAScript 2018 - only Theory

JavaScript Asynchronous Iteration
=========================================================================================================

ECMAScript 2019 - JS 2019

JavaScript String trimStart()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text1 = "              Hello World!           ";
let text2 = text1.trimStart();
document.getElementById("demo").innerHTML = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;    
</script>    
</body>    
</html>
=========================================================================================================

JavaScript String trimEnd()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text1 = "              Hello World!  ";
let text2 = text1.trimEnd();
document.getElementById("demo").innerHTML = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;    
</script>    
</body>    
</html> 

=========================================================================================================

JavaScript Object fromEntries()

The fromEntries() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];
const myObj = Object.fromEntries(fruits);
document.getElementById("demo").innerHTML = myObj.pears;
</script>
</body>
</html>

=========================================================================================================

Optional catch Binding

JavaScript Array flat()


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
document.getElementById("demo").innerHTML = newArr;    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Array flatMap()
The flatMap() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const newArr = myArr.flatMap((x) => x * 2);
document.getElementById("demo").innerHTML = newArr;
</script>    
</body>    
</html>

=========================================================================================================

Revised JSON.stringify()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = JSON.stringify("\u26D4");
document.getElementById("demo").innerHTML = JSON.parse(text);
</script>    
</body>    
</html>

=========================================================================================================

Separator Symbols

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "\u2028";
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================

Revised Function toString()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a,b){
    return a * b;
}    
document.getElementById("demo").innerHTML = myFunction.toString();
</script>    
</body>    
</html>

=========================================================================================================

ECMAScript 2020

JavaScript BigInt - Integer Example

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 999999999999999;
let y = 9999999999999999;
document.getElementById("demo").innerHTML = x + "<br>" + y;
</script>    
</body>    
</html>
=========================================================================================================

BigInt Example


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 9999999999999999;
let y = BigInt("999999999999999999");
document.getElementById("demo").innerHTML = x + "<br>" + y;    
</script>    
</body>    
</html>

=========================================================================================================
To create a BigInt, append n to the end of an integer or call BigInt():

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 123456789012345678901234567890n;
let y = BigInt("123456789012345678901234567890");
document.getElementById("demo").innerHTML = x + "<br>" + y;  
</script>    
</body>    
</html>

=========================================================================================================

The JavaScript typeof a BigInt is "bigint":

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = BigInt("999999999999999");
document.getElementById("demo").innerHTML = typeof x;
</script>    
</body>    
</html>

=========================================================================================================

JavaScript String matchAll()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "Bangalore is garden city, Bangalore has a metro trains, bangalore has more number of EV buses"
const Itertor = text.matchAll("Bangalore");
document.getElementById("demo").innerHTML = Array.from(Itertor);
</script>    
</body>    
</html>
=========================================================================================================
JavaScript Strings
The matchAll() Method
ES2020 intoduced the string method matchAll().

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "Bangalore is clean city, Bangalore has a good bus connectivity, bangalore a good water facility";
const iterator = text.matchAll(/Bangalore/g);
document.getElementById("demo").innerHTML = Array.from(iterator);
</script>    
</body>    
</html>

=========================================================================================================

The Nullish Coalescing Operator (??)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let name = null;
let text = "missing";
let result = name ?? text;
document.getElementById("demo").innerHTML = "The result is " + result;
</script>    
</body>    
</html>

=========================================================================================================

The Optional Chaining Operator (?.)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const car = {type:"Volvo", model:"2010", color: "White"}
let name = car?.name;
document.getElementById("demo").innerHTML = name;
</script>    
</body>    
</html>

=========================================================================================================

The &&= Operator

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 10;
x &&= 5;
document.getElementById("demo").innerHTML = "Value of x is: " + x;    
</script>    
</body>    
</html>

=========================================================================================================

The ||= Operator

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = undefined;
x ||= 5;
document.getElementById("demo").innerHTML = "Value of x is: " + x;
</script>    
</body>    
</html>

=========================================================================================================

The ??= Operator

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 100;
x ??= 5;
document.getElementById("demo").innerHTML = "value of x is: " + x;
</script>    
</body>    
</html>

=========================================================================================================

ECMAScript 2021 - JS 2021

JavaScript String ReplaceAll()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = " I love cats, Cats are very popular, Cats are easy to love."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================

The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = " I love cats, Cats are very popular, Cats are easy to love."
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Numeric Separator (_)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const num = 2_2354_658_951;
document.getElementById("demo").innerHTML = num;    
</script>    
</body>    
</html>

=========================================================================================================

The numeric separator is only for visual use.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const num1 = 1_000_000_000;
const num2 = 1000000000;
document.getElementById("demo").innerHTML = num1 == num2;    
</script>    
</body>    
</html>

Or

document.getElementById("demo").innerHTML = num1 == num2;    

=========================================================================================================
The numeric separator can be placed anywhere in a number:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const num = 1_2_3_4_5_6_7_8_9;
document.getElementById("demo").innerHTML = num;    
</script>    
</body>    
</html>