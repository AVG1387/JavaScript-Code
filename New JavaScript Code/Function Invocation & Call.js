28-12-2022
JavaScript Function Invocation

Invoking a Function as a Function

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a, b) {
    return  a * b;
}    
document.getElementById("demo").innerHTML = myFunction(2,2);
</script>    
</body>    
</html>

=========================================================================================================

myFunction() and window.myFunction() is the same function:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a,b) {
    return a * b;
}    
document.getElementById("demo").innerHTML = window.myFunction(2,8);
</script>    
</body>    
</html>

=========================================================================================================

The Global Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x = myFunction();
function myFunction() {
    return this;
}    
document.getElementById("demo").innerHTML = x;
</script>    
</body>    
</html>

=========================================================================================================

Invoking a Function as a Method
In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObject = {
firstName: "John",
lastName: "Doe",
fullName: function() {
return this.firstName + " " + this.lastName;
}
}   
document.getElementById("demo").innerHTML = myObject.fullName(); 
</script>    
</body>    
</html>

=========================================================================================================

Example - 2 

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObject = {
    firstName: "Ananda",
    lastName: "Ganesh",
    fullName: function() {
        return this;
    }
}    
document.getElementById("demo").innerHTML = myObject.fullName();
</script>    
</body>    
</html>

=========================================================================================================

Invoking a Function with a Function Constructor
If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}    
const myObj = new myFunction("Ananda", "Ganesh")
document.getElementById("demo").innerHTML = myObj.firstName;
</script>    
</body>    
</html>

=========================================================================================================
JavaScript Function call()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObject = {
    firstname: "Ananda",
    lastname: "Ganesh",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}    
document.getElementById("demo").innerHTML = myObject.fullname();
</script>    
</body>    
</html>

=========================================================================================================

The JavaScript call() Method
This example calls the fullName method of person, using it on person1:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>    
<script>
const person = {
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}    
const person1 = {
    firstname:"Paru",
    lastname:"Mohan"
}
const person2 = {
    firstname: "Ananda",
    firstname: "Ganesh",
}
document.getElementById("demo").innerHTML = person.fullname.call(person1);
</script>
</body>    
</html>

=========================================================================================================
This example calls the fullName method of person, using it on person2:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}    
const person1 = {
    firstname: "Ananda",
    lastname: "Ganesh"
}
const person2 = {
    firstname: "Paru",
    lastname:"Mohan"
}
document.getElementById("demo").innerHTML = person.fullname.call(person2);
</script>    
</body>    
</html>

=========================================================================================================

The call() Method with Arguments
The call() method can accept arguments:
JavaScript Functions
This example calls the fullName method of person, using it on person1:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    fullname: function(city, country) {
return this.firstname + " " + this.lastname + " " + city + " " + country;
    }
}    
const person1 = {
    firstname: "Ananda",
    lastname: "Ganesh",
}
const person2 = {
    firstname: "Paru",
    lastname: "Ganesh",
}
document.getElementById("demo").innerHTML = person.fullname.call(person1, "Bangalore", "India");
</script>    
</body>    
</html>

=========================================================================================================