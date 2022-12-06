05-12-2022

Array reduceRight()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45,69,71,23,68,01,32]
var sum = numbers.reduceRight(myFunction);
document.getElementById("demo").innerHTML = "The sum is " + sum;
function myFunction(total, value) {
  return total + value;
}  
</script>  
</body>  
</html>

=========================================================================================================

Array every()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;
function myFunction(value, index, array) {
  return value > 18;
}
</script>
</body>
</html>

=========================================================================================================

Array some()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45,85,96,32,14,77,02];
var allOver18 = numbers.some(myFunction);
document.getElementById("demo").innerHTML = "Some over 18 is " + allOver18;
function myFunction(value) {
  return value > 18;
}  
</script>
</body>  
</html>

=========================================================================================================

Array indexOf()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
document.getElementById("demo").innerHTML = "Apple is found in position " + position;
</script>
</body>
</html>

=========================================================================================================

Array lastIndexOf()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
document.getElementById("demo").innerHTML = "Apple is found in position " + position;
</script>
</body>
</html>
=========================================================================================================

JSON.parse()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const txt = '{"name":"Anand", "age":35, "city":"Bangalore"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
</script>
</body>
</html>

=========================================================================================================

JSON.stringify()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name: "John", age:35, city:"Bangalore"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
</script>  
</body>  
</html>

=========================================================================================================	
Date.now()

<!DOCTYPE html>
<html>
<body>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
document.getElementById("demo1").innerHTML = Date.now();
var d = new Date();
document.getElementById("demo2").innerHTML = d.getTime();  
</script>
</body>  
</html>

=========================================================================================================	

Date toISOString()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
</Script>  
</body>  
</html>

=========================================================================================================	

Date toJSON()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
d = new Date();
document.getElementById("demo").innerHTML = d.toJSON();  
</script>  
</body>  
</html>

=========================================================================================================	

Property Getters and Setters

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
var person = {
  firstName: "Ganesh",
  lastName: "Ananda",
  get fullName() {
    return this.firstName + " " + this.lastName; 
  }
};
document.getElementById("demo").innerHTML = person.fullName;  
</Script>  
</body>  
</html>

=========================================================================================================

This example creates a setter and a getter for the language property:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
firstName: "John",
lastName : "Doe",
language : "NO",
get lang() {
  return this.language;
},
set lang(value) {
this.language = value;
}
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.lang;
</script>
</body>
</html>

=========================================================================================================

This example uses a setter to secure upper case updates of language:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
firstName: "John",
lastName : "Doe",
language : "",
set lang(value) {
  this.language = value.toUpperCase();
  }
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.language;  
</script>  
</body>  
</html>

=========================================================================================================

Object.defineProperty()


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "Ananda",
  lastName: "Ganesh",
language: "NO",
};
Object.defineProperty(person, "language",{
  value : "EN",
  writable: true,
  enumerable: true,
  configurable: true
});
txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
  }  
  document.getElementById("demo").innerHTML = txt;
</script>  
</body>  
</html>

=========================================================================================================

This example is the same code, except it hides the language property from enumeration:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO", 
};
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : false,
  configurable : true
});
txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
</script>
</body>
</html>

=========================================================================================================

This example creates a setter and a getter to secure upper case updates of language:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});
person.language = "en";
document.getElementById("demo").innerHTML = person.language;
</script>
</body>
</html>

=========================================================================================================

Function Bind()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
  firstName: "Anadna",
  lastName: "Ganesh",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}  
const member = {
  firstName: "Paru",
  lastName: "Mohan",
  }
  let fullName = person.fullName.bind(member);
  document.getElementById("demo").innerHTML  = fullName();
</script>  
</body>  
</html>

=========================================================================================================05-12-2022

Array reduceRight()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45,69,71,23,68,01,32]
var sum = numbers.reduceRight(myFunction);
document.getElementById("demo").innerHTML = "The sum is " + sum;
function myFunction(total, value) {
  return total + value;
}  
</script>  
</body>  
</html>

=========================================================================================================

Array every()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
document.getElementById("demo").innerHTML = "All over 18 is " + allOver18;
function myFunction(value, index, array) {
  return value > 18;
}
</script>
</body>
</html>

=========================================================================================================

Array some()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45,85,96,32,14,77,02];
var allOver18 = numbers.some(myFunction);
document.getElementById("demo").innerHTML = "Some over 18 is " + allOver18;
function myFunction(value) {
  return value > 18;
}  
</script>
</body>  
</html>

=========================================================================================================

Array indexOf()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
document.getElementById("demo").innerHTML = "Apple is found in position " + position;
</script>
</body>
</html>

=========================================================================================================

Array lastIndexOf()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
document.getElementById("demo").innerHTML = "Apple is found in position " + position;
</script>
</body>
</html>
=========================================================================================================

JSON.parse()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const txt = '{"name":"Anand", "age":35, "city":"Bangalore"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
</script>
</body>
</html>

=========================================================================================================

JSON.stringify()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name: "John", age:35, city:"Bangalore"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
</script>  
</body>  
</html>

=========================================================================================================	
Date.now()

<!DOCTYPE html>
<html>
<body>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
document.getElementById("demo1").innerHTML = Date.now();
var d = new Date();
document.getElementById("demo2").innerHTML = d.getTime();  
</script>
</body>  
</html>

=========================================================================================================	

Date toISOString()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();
</Script>  
</body>  
</html>

=========================================================================================================	

Date toJSON()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
d = new Date();
document.getElementById("demo").innerHTML = d.toJSON();  
</script>  
</body>  
</html>

=========================================================================================================	

Property Getters and Setters

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
var person = {
  firstName: "Ganesh",
  lastName: "Ananda",
  get fullName() {
    return this.firstName + " " + this.lastName; 
  }
};
document.getElementById("demo").innerHTML = person.fullName;  
</Script>  
</body>  
</html>

=========================================================================================================

This example creates a setter and a getter for the language property:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
firstName: "John",
lastName : "Doe",
language : "NO",
get lang() {
  return this.language;
},
set lang(value) {
this.language = value;
}
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.lang;
</script>
</body>
</html>

=========================================================================================================

This example uses a setter to secure upper case updates of language:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
firstName: "John",
lastName : "Doe",
language : "",
set lang(value) {
  this.language = value.toUpperCase();
  }
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.language;  
</script>  
</body>  
</html>

=========================================================================================================

Object.defineProperty()


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "Ananda",
  lastName: "Ganesh",
language: "NO",
};
Object.defineProperty(person, "language",{
  value : "EN",
  writable: true,
  enumerable: true,
  configurable: true
});
txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
  }  
  document.getElementById("demo").innerHTML = txt;
</script>  
</body>  
</html>

=========================================================================================================

This example is the same code, except it hides the language property from enumeration:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO", 
};
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : false,
  configurable : true
});
txt = "";
for (var x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
</script>
</body>
</html>

=========================================================================================================

This example creates a setter and a getter to secure upper case updates of language:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});
person.language = "en";
document.getElementById("demo").innerHTML = person.language;
</script>
</body>
</html>

=========================================================================================================

Function Bind()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
  firstName: "Anadna",
  lastName: "Ganesh",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}  
const member = {
  firstName: "Paru",
  lastName: "Mohan",
  }
  let fullName = person.fullName.bind(member);
  document.getElementById("demo").innerHTML  = fullName();
</script>  
</body>  
</html>

=========================================================================================================