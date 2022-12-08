08-12-2022 

Array keys()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const fruits = ["Banana", "Mango", "Apples", "Oragne"];
const keys = fruits.keys();
let text = "";
for (let x of keys) {
    text += x + "<br>";
}    
document.getElementById("demo").innerHTML = text;
</Script>    
</body>    
</html>

=========================================================================================================

Array find()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const numbers = [12,23,65,45,87,98];
const first = numbers.find(myFunction);
document.getElementById("demo").innerHTML = "First number over 18 is " + first;
function myFunction(value, index, array) {
    return value>18;
}    
</script>    
</body>    
</html>

=========================================================================================================

Array findIndex()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const numbers = [4, 9, 16, 25, 29];
document.getElementById("demo").innerHTML = "First number over 18 has index " + numbers.findIndex(myFunction);
function myFunction(value, index, array) {
return value > 18;
}
</script>
</body>
</html>

=========================================================================================================

New Math Methods

The Math.trunc() Method


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.trunc(8,10);    
</script>    
</body>    
</html>

=========================================================================================================

The Math.sign() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.sign(4);    
</script>    
</body>    
</html>

=========================================================================================================

The Math.cbrt() Method (cube root)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.cbrt(125);    
</script>    
</body>    
</html>

=========================================================================================================

The Math.log2() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.log2(16);    
</script>    
</body>    
</html>

=========================================================================================================

The Math.log10() Method


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.log10(1000);    
</script>    
</body>    
</html>

=========================================================================================================

New Number Properties

EPSILON Example


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = Number.EPSILON;
document.getElementById("demo").innerHTML = x;    
</script>    
</body>    
</html>

=========================================================================================================

MIN_SAFE_INTEGER Example

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = Number.MIN_SAFE_INTEGER;
document.getElementById("demo").innerHTML = x;    
</script>    
</body>    
</html>

=========================================================================================================

MAX_SAFE_INTEGER Example

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = Number.MAX_SAFE_INTEGER;
document.getElementById("demo").innerHTML = x;    
</script>    
</body>    
</html>

=========================================================================================================

New Number Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Number.isInteger(10) + "<br>" + Number.isInteger(10.5)
</script>    
</body>    
</html>

=========================================================================================================

The Number.isSafeInteger() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(1234567890123456789123);    
</script>    
</body>    
</html>

=========================================================================================================

New Global Methods

The isFinite() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>    
<script>
document.getElementById("demo").innerHTML = isFinite(10/2) + "<br>" + isFinite(10/1);    
</script>
</body>    
</html>

=========================================================================================================

The isNaN() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
document.getElementById("demo").innerHTML = isNaN("Hello") + "<br>"  + isNaN("10");    
</Script>    
</body>    
</html>

=========================================================================================================	

Object entries()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Banana", "Grapes", "Apples", "Oragnes", "Cherry", "Berry"];
const f = fruits.entries();
for (let x of f) {
    document.getElementById("demo").innerHTML += x + "<br>";
}
</script>    
</body>    
</html>

=========================================================================================================	

Modules

Import from named exports
Import named exports from the file person.js:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script type="module">
import { name, age } from "./person.js";
let text = "My name is " + name + ", I am " + age + ".";
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================

Import from default exports
Import a default export from the file message.js:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script type="module">
import message from "./message.js";
document.getElementById("demo").innerHTML = message();
</script>
</body>
</html>

=========================================================================================================

ECMAScript 2016 (JS 2016)

Exponentiation Operator

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 10;
let z = x ** 5;
document.getElementById("demo").innerHTML = z;
</script>    
</body>    
</html>

=========================================================================================================

Math.pow(x, y):

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 10;
let z = Math.pow(x,4);
document.getElementById("demo").innerHTML = z;
</script>    
</body>    
</html>

=========================================================================================================

Exponentiation Assignment

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = 5;
x **= 3;
document.getElementById("demo").innerHTML = x;    
</script>    
</body>    
</html>
=========================================================================================================

JavaScript Array includes()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Banana", "Manago", "Oragne", "Apples"];
document.getElementById("demo").innerHTML = fruits.includes("Apples");
</script>    
</body>    
</html>

=========================================================================================================

ECMAScript 2017 (JS 2017)

JavaScript String Padding
The padStart() method pads a string with another string:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "5";
text = text.padStart(4,"0");
document.getElementById("demo").innerHTML = text;    
</script>    
</body>    
</html>

=========================================================================================================

The padEnd() method pads a string with another string:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "5";
text = text.padEnd(4,"0");
document.getElementById("demo").innerHTML = text;    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Object Entries

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    age: 35,
    eyeColor: "blue"
};
let text = Object.entries(person);
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================