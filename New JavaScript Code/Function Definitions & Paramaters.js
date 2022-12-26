26-12-2022

JS Functions - Function Definitions

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var x = myFunction(4,3);
document.getElementById("demo").innerHTML = x;
function myFunction(a,b) {
    return a * b; 
}    
</script>
</body>    
</html>

=========================================================================================================
Function Expressions
A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const x = function (a,b) {return a * b};
document.getElementById("demo").innerHTML = x;     
</script>    
</body>    
</html>

=========================================================================================================
After a function expression has been stored in a variable, the variable can be used as a function:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const x = function (a ,b) {return a * b};
document.getElementById("demo").innerHTML = x(2,6);    
</script>    
</body>    
</html>

=========================================================================================================

The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

Functions can also be defined with a built-in JavaScript function constructor called Function().

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myFunction = new Function ("a", "b", "return a * b");
document.getElementById("demo").innerHTML = myFunction(3,5);
</script>
</body>    
</html>

=========================================================================================================

You actually don't have to use the function constructor. The example above is the same as writing:
Example

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>    
<script>
const myFunction = function (a , b) {return a * b}
document.getElementById("demo").innerHTML = myFunction(10,12); 
</script>    
</body>    
</html>

=========================================================================================================

Functions can be invoked automatically without being called:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
(function(){
    document.getElementById("demo").innerHTML = "Hello! i called myself";
})();    
</script>    
</body>    
</html>

=========================================================================================================

Functions Can Be Used as Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a,b) {
    return a * b;
}    
let x = myFunction(100,12);
document.getElementById("demo").innerHTML = x;
</script>    
</body>    
</html>

=========================================================================================================

JavaScript functions can be used in expressions:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a,b) {
    return a * b;
}    
let x = myFunction(10,3) * 10;
document.getElementById("demo").innerHTML = x;
</script>    
</body>    
</html>

=========================================================================================================

Functions are Objects

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
function myFunction(a,b){
    return arguments.length;
}    
document.getElementById("demo").innerHTML = myFunction(2,10);
</Script>    
</body>    
</html>

=========================================================================================================

The toString() method returns the function as a string:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a,b) {
    return a * b;
}    
document.getElementById("demo").innerHTML = myFunction.toString();
</script>    
</body>    
</html>

=========================================================================================================

Arrow Functions

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const x = (x,y) => x * y;
document.getElementById("demo").innerHTML = x(3,4);
</script>    
</body>    
</html>

=========================================================================================================

Function Parameters

Function Parameters and Arguments

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(x,y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}    
document.getElementById("demo").innerHTML = myFunction(4);
</script>    
</body>    
</html>

=========================================================================================================

Default Parameter Values
Example
If y is not passed or undefined, then y = 10.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(x,y = 3) {
    return x + y;
}    
document.getElementById("demo").innerHTML = myFunction(5);
</script>    
</body>    
</html>

=========================================================================================================

Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

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
let x = sum(10,12,13,14,15,16,17,18,19,20,21,22,23);
document.getElementById("demo").innerHTML = x;
</script>    
</body>    
</html>

=========================================================================================================

The Arguments Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}    
document.getElementById("demo").innerHTML = findMax(10,8,31,25,91);
</script>    
</body>    
</html>

=========================================================================================================
Or create a function to sum all input values:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}    
document.getElementById("demo").innerHTML = sumAll(123,258,369);
</script>    
</body>    
</html>

=========================================================================================================