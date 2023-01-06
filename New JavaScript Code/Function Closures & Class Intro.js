06-01-2023

JavaScript Function Closures

Global Variables
A function can access all variables defined inside the function, like this:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
myFunction();
function myFunction(){
    let a = 5;
    document.getElementById("demo").innerHTML = a * a;
}    
</script>    
</body>    
</html>

=========================================================================================================

But a function can also access variables defined outside the function, like this:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let a = 7;
myFunction();
function myFunction(){
    document.getElementById("demo").innerHTML = a * a;
}    
</script>    
</body>    
</html>

=========================================================================================================
JavaScript Functions
Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
myFunction();
document.getElementById("demo").innerHTML = a * a;
function myFunction() {
    a = 4;
}    
</script>    
</body>    
</html>

=========================================================================================================

Variable Lifetime
JavaScript Function Closures
Counting with a global variable.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let counter = 0;
function add() {
    counter += 1;
}    
add();
add();
add();
add();
add();
add();
add();
document.getElementById("demo").innerHTML = "This counter is: " + counter;
</script>    
</body>    
</html>

=========================================================================================================

There is a problem with the solution above: Any code on the page can change the counter, without calling add().

The counter should be local to the add() function, to prevent other code from changing it:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let counter = 0;
function add() {
    let counter = 0;
    counter += 1;
}    
add();
add();
add();
add();
document.getElementById("demo").innerHTML = "The counter is: " + counter;
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Closures
Counting with a local variable.

<!DOCTYPE html>
<html>
<body>
    <button type="button" onclick="myFunction()">Count!</button>
<p id="demo">0</p>
<script>
function add() {
    let counter = 0;
    counter += 1;
    return counter;
}    
function myFunction() {
    document.getElementById("demo").innerHTML = add();
}
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Nested Functions

<!DOCTYPE html>
<html>
<body>
<p id="demo"0></p>
<script>
document.getElementById("demo").innerHTML = add();
function add() {
    let counter = 0;
    function plus() {counter +=1 };
    plus();
    return counter;
}    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Closures
Remember self-invoking functions? What does this function do?

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="myFunction()">Count!</button>    
<p id="demo">0</p>
<script>
const add = (function (){
    let counter = 0;
    return function () {counter += 1; return counter;}
}) ();
function myFunction(){
    document.getElementById("demo").innerHTML = add();
}
</script>
</body>    
</html>

=========================================================================================================

JavaScript Classes

Class Intro

JavaScript Class Syntax

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
const myCar = new Car("Maruti",2012);
document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year;
</script>    
</body>    
</html>

=========================================================================================================

The Constructor Method
Class Methods
Create a Class method named "age", that returns the Car age:

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
age() {
    let date = new Date();
    return date.getFullYear() - this.year;
}
}    
let myCar = new Car("Maruti",2022);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years.old."; 
</script>    
</body>    
</html>

=========================================================================================================

You can send parameters to Class methods:

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
    age(x) {
        return x - this.year;
    }
}    
let date = new Date();
let year = date.getFullYear();
let myCar = new Car("Ford", 2022);
document.getElementById("demo").innerHTML = "My car is " + myCar.age(year)  + " year old.";
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Class Method
Pass a parameter into the "age()" method.

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
    age(x) {
return x - this.year;
    }
}    
let date = new Date();
let year = date.getFullYear();
let myCar = new Car("Maruti", 2020);
document.getElementById("demo").innerHTML = "My car is " + myCar.age(year) + " years old.";
</script>    
</body>    
</html>

=========================================================================================================
