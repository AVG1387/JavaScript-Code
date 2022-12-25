
25-12-2022

JavaScript ES5 Object Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
firstName: "Ananda",
lastName: "Ganesh",
language: "Kannada"
};
Object.defineProperty(person, "language", {value:"NO"}) 
document.getElementById("demo").innerHTML = person.language;   
</script>    
</body>    
</html>

=========================================================================================================
Listing All Properties
This example list all properties of an object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "KA"
}
Object.defineProperty(person, "language", {enumerable:false});
document.getElementById("demo").innerHTML = Object.getOwnPropertyNames(person);
</script>    
</body>    
</html>

=========================================================================================================
Listing Enumerable Properties
This example list only the enumerable properties of an object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "Kannada",
}
Object.defineProperty(person, "language", {enumerable:false});
document.getElementById("demo").innerHTML = Object.keys(person);
</script>    
</body>    
</html>

=========================================================================================================

Adding a Property
This example adds a new property to an object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "Kannada",
}
Object.defineProperty(person, "year", {value:"2022"});
document.getElementById("demo").innerHTML = person.year;    
</script>    
</body>    
</html>

=========================================================================================================

Adding Getters and Setters
The Object.defineProperty() method can also be used to add Getters and Setters:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {firstName: "Ananda", lastName:"Ganesh"};
Object.defineProperty(person, "fullName", {
    get: function() {return this.firstName + " " + this.lastName;} 
});
document.getElementById("demo").innerHTML = person.fullName;  
</script>    
</body>    
</html>

=========================================================================================================

A Counter Example

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {counter:0};
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;
</script>
</body>
</html>

=========================================================================================================