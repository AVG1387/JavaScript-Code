19-12-2022

Adding a Method to an Object
Adding a new method to an existing object is easy:

Accessors & Constructors

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("Vedamurthy", "M V", 73, "Blue");
const myMother = new Person("Parvathi", "V", 72, "Green");

myFather.name = function() {
    return this.firstName + " " + this.lastName;
};
document.getElementById("demo").innerHTML = "My Father Name is " + myFather.name();
</script>    
</body>    
</html>

=========================================================================================================

Adding a Property to a Constructor


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
document.getElementById("demo").innerHTML =
"The nationality of my father is " + myFather.nationality; 
</script>
</body>
</html>

=========================================================================================================

To add a new property to a constructor, you must add it to the constructor function:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Indian";
}    
const myFather = new Person("Vedamurthy", "M V", 75, "Blue");
const myMother = new Person("Parvathi", "V", 73, "Green");
document.getElementById("demo").innerHTML = "My father is " + myFather.nationality + ". My mother is " + myMother.nationality; 
</script>    
</body>    
</html>

=========================================================================================================

Adding a Method to a Constructor
Your constructor function can also define methods:


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName;
    };
    }    
    const myFather = new Person("Mohan", "M V", 73, "Blue");
    document.getElementById("demo").innerHTML = "My father is " + myFather.name();  
</script>    
</body>    
</html>

=========================================================================================================

The changeName() function assigns the value of name to the person's lastName property.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    }

}    
const myMother = new Person("Mohan", "M V", 35, "Red");
myMother.changeName("Paru");
document.getElementById("demo").innerHTML = "My mother's last name is " + myMother.lastName;
</script>    
</body>    
</html>

=========================================================================================================

Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const x1 = new String();
const x2 = new Number();
const x3 = new Boolean();
const x4 = new Object();
const x5 = new Array();
const x6 = new RegExp();
const x7 = new Function();
const x8 = new Date();
document.getElementById("demo").innerHTML = 
"x1: " + typeof x1 + "<br>" + 
"x2: " + typeof x2 + "<br>" + 
"x3: " + typeof x3 + "<br>" + 
"x4: " + typeof x4 + "<br>" + 
"x5: " + typeof x5 + "<br>" + 
"x6: " + typeof x6 + "<br>" + 
"x7: " + typeof x7 + "<br>" + 
"x8: " + typeof x8 + "<br>";
</script>    
</body>    
</html>

=========================================================================================================



<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let x1 = "";
let x2 = 0;
let x3 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};
document.getElementById("demo").innerHTML = 
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Object Prototypes

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}    
const myFather = new Person("Vedamurthy", "MV", 73, "Blue");
const myMother = new Person("Paru", "Mohan", 72, "Green");
document.getElementById("demo").innerHTML = "My father is " + myFather.age + ". My mother is  " + myMother.age;
</script>    
</body>    

=========================================================================================================

The JavaScript prototype property also allows you to add new methods to objects constructors:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}    
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
const myFather = new Person("Vedamurthy", "M V", 50, "blue");
document.getElementById("demo").innerHTML = "My father is " + myFather.name();
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Iterables

Iterating Over a String
You can use a for..of loop to iterate over the elements of a string:

<!DOCTYPE html>
<html>
<p id="demo"></p>
<script>
const name = "W3schools";
let text= ""
for (const x of name) {
    text += x  + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>    
</html>
</body>

=========================================================================================================

Iterating Over an Array

You can use a for..of loop to iterate over the elements of an Array:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const name = ["a","b","c","d"]
let text = "";
for (const x of name) {
    text += x + "<br>";
}    
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================

Home Made Iterable
This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myNumbers() {
let n = 0;
return {
next: function() {
    n += 10;
    return {value:n, done:false};
    }
  };
}
const n = myNumbers();
n.next();
n.next();
n.next();
document.getElementById("demo").innerHTML = n.next().value;
</script>
</body>
</html>

=========================================================================================================

Now you can use for..of

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
myNumbers = {};
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
let text = ""
for (const num of myNumbers) {
  text += num +"<br>"
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================

The Symbol.iterator method is called automatically by for..of.

But we can also do it "manually":

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
myNumbers = {};
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
let iterator = myNumbers[Symbol.iterator]();
let text = ""
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value +"<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================