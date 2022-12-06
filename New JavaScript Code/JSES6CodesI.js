06-12-2022

Javascript ES6 - New Features in ES6

The let keyword
Redeclaring a Variable Using let

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
let x = 10;
{
  let x = 2;
}  
document.getElementById("demo").innerHTML = x;

</script>
</body>  
</html>

=========================================================================================================


JavaScript const
The const keyword allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var x = 10;
{const x = 2;}
document.getElementById("demo").innerHTML = x;  
</script>  
</body>  
</html>


=========================================================================================================

Arrow Functions
Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const x = (x,y) => x * y;
document.getElementById("demo").innerHTML = x(5,5); 
</Script>  
</body>  
</html>

=========================================================================================================
Example 2;

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const x = (x,y) => {return x *y };
document.getElementById("demo").innerHTML = x(5,6);
</script>  
</body>  
</html>

=========================================================================================================

The Spread (...) Operator

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const cars1 = ["Saab", "BMW",..."Volvo"];
const cars2 = ["fortuner", "Toyota"]
const combined = [cars1,...cars2];
document.getElementById("demo").innerHTML = combined;
</script>  
</body>  
</html>


=========================================================================================================

The ... operator can be used to expand an iterable into more arguments for function calls:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const numbers = [12,23,45,56,78,98];
const maxValue = Math.max(...numbers);
document.getElementById("demo").innerHTML = maxValue;  
</script>  
</body>  
</html>

=========================================================================================================

The For/Of Loop

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x + "<br>";
}  
document.getElementById("demo").innerHTML = text;
</script>  
</body>  
</html>
=========================================================================================================

Looping over a String

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let language = "AnandaVGanesh";
let text = "";
for (let x of language) {
  text += x + "<br>";
}  
document.getElementById("demo").innerHTML = text;
</script>  
</body>  
</html>
=========================================================================================================

JavaScript Maps

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = new Map([
  ["apples", 500],
  ["cherry", 300],
  ["orange", 200]
]);
document.getElementById("demo").innerHTML = fruits.get("apples");   
</script>  
</body>  
</html>

=========================================================================================================
JavaScript Sets

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
document.getElementById("demo").innerHTML = letters.size;    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Classes

Using a Class

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
constructor(name, year) {
this.name = name;
this.year = year;
}
}
const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year;
</script>
</body>
</html>

=========================================================================================================
