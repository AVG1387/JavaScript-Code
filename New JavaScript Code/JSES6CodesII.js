07-12-2022

JavaScript Promises
Example Using a Promise

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
const myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){ myResolve("i Love you !!"); }, 3000);
});
myPromise.then(function(value){
    document.getElementById("demo").innerHTML = value;
});
</script>    
</body>    
</html>

=========================================================================================================

The Symbol Type

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
let id = Symbol('id');
person[id] = 143521;
document.getElementById("demo").innerHTML = person[id] + " " + person.id;    
</script>    
</body>    
</html>

=========================================================================================================

Default Parameter Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(x,y = 10){
    return x+ y;
}    
document.getElementById("demo").innerHTML = myFunction(5);
</script>    
</body>    
</html>

=========================================================================================================
Function Rest Parameter

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let x = sum(14, 25, 58, 49, 37, 120, 366, 677);
document.getElementById("demo").innerHTML = x;
</script>
</body>
</html>

=========================================================================================================
String.includes()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.includes("world");
</script>
</body>
</html>

=========================================================================================================

String.startsWith()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.startsWith("Hello");
</script>    
</body>    
</html>

=========================================================================================================

String.endsWith()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text = "Ananda Ganesh";
document.getElementById("demo").innerHTML = text.endsWith("Ganesh");
</script>    
</body>    
</html>

=========================================================================================================

Array.from()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myArr = Array.from("ABCDEFGH");
document.getElementById("demo").innerHTML = myArr;
</script>    
</body>    
</html>
=========================================================================================================
