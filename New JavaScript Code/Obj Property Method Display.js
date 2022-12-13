10-12-2022

JS Objects

Objects are Variables
JavaScript variables can contain single values:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
    let person = "Ananda V Ganesh";
    document.getElementById("demo").innerHTML = person;
</script>

</body>    
</html>

=========================================================================================================

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
    let person = {
        firstName: "Ananda",
        lastName: "Ganesh",
        age: 35,
        eyeColor: "Blue"
    };
    document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
</script>

</body>    
</html>

=========================================================================================================

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
    const person = {
        firstName: "Ananda",
        lastName: "Ganesh",
        age: 35,
        eyeColor: "Blue"
    };
    document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
</script>

</body>    
</html>
=========================================================================================================
12-12-2022

Object Properties - Example 1

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    age: 50,
    eyeColor: "Blue"
};
document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " yours old.";    
</script>    
</body>    
</html>

=========================================================================================================

Object Properties - Example 2

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = { 
    firstName: "Ananda",
    lastName: "Ganesh",
    eyeColor: "Blue",
    age:35
};
document.getElementById("demo").innerHTML = person.firstName + " is " + person["age"] + " yours old";    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript for...in Loop

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    fname: "Anand",
    lname: "Ganesh",
    age: 35
};
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}    
document.getElementById("demo").innerHTML = txt;
</script>    
</body>    
</html>

=========================================================================================================

Adding New Properties

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstname: "Ananda",
    lastname: "Ganesh",
    age: 50,
    eyecolor: "blue"
};
person.nationlaity = "Indian";
document.getElementById("demo").innerHTML = person.firstname + " is " + person.nationlaity + ".";    
</script>    
</body>    
</html>

=========================================================================================================

Deleting Properties
The delete keyword deletes a property from an object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 35,
    eyecolor: "Red"
};
delete person.age;
document.getElementById("demo").innerHTML = person.firstname + " is " + person.age + " years old";     
</script>    
</body>    
</html>

=========================================================================================================

Deleting Properties Example - 2 

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
firstname: "John",
lastname: "Doe",
age: 50,
eyecolor: "blue"
};
delete person["age"];
document.getElementById("demo").innerHTML =
person.firstname + " is " + person.age + " years old.";
</script>
</body>
</html>

=========================================================================================================

Nested Objects

Values in an object can be another object:

Example 1:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {
name: "Ananda",
age: 35,
cars: {
    cars1: "Fiat",
    cars2: "BMW",
    cars3: "Volov"
}
}    
document.getElementById("demo").innerHTML = myObj.cars.cars2;
</script>    
</body>    
</html>

=========================================================================================================

Example 2 

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {
name: "Ananda",
age: 35,
cars: {
    cars1: "Fiat",
    cars2: "BMW",
    cars3: "Volov"
}
}    
document.getElementById("demo").innerHTML = myObj.cars["cars2"];
</script>    
</body>    
</html>

=========================================================================================================

Example 3

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {
name: "Ananda",
age: 35,
cars: {
    cars1: "Fiat",
    cars2: "BMW",
    cars3: "Volov"
}
}    
document.getElementById("demo").innerHTML = myObj["cars"]["cars2"];
</script>    
</body>    
</html>

=========================================================================================================

Example 4

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {
    name: "Ananda",
    age: 35,
    cars:{
        car1: "BMW",
        car2: "Volvo",
        car3: "Fiat"
    }
}    
let p1 = "cars";
let p2 = "car2";
document.getElementById("demo").innerHTML = myObj[p1][p2];
</script>    
</body>    
</html>

=========================================================================================================

Example 5

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {
  name: "John",
  age: 30,
  cars: {
  car1: "Ford",
  car2: "BMW",
  car3: "Fiat"
  }
}
let p1 = "cars";
let p2 = "car2";
document.getElementById("demo").innerHTML = myObj[p1][p2];
</script>
</body>
</html>

=========================================================================================================
13-12-2022

JavaScript Object Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstname: "Ananda",
    lastname: "Ganesh",
    id: 5566,
fullname: function() {
    return this.firstname + " " + this.lastname;
}
};
document.getElementById("demo").innerHTML = person.fullname();    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    id: 456789,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();    
</script>    
</body>    
</html>


=========================================================================================================

If you access the fullName property, without (), it will return the function definition:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const person = {
    firstname: "Ananda",
    lastname: "Ganesh",
    id :569874,
    fullname: function() {
return this.firstname + " " + this.lastname;
    }
};
document.getElementById("demo").innerHTML = person.fullname;    
</Script>    
</body>    
</html>

=========================================================================================================

Adding a Method to an Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Vedamurthy",
    lastName: "M V (Mohan)",
    id: 564789,
};
person.name = function() {
    return this.firstName + " " + this.lastName;
};
document.getElementById("demo").innerHTML = "My father name is " + person.name();    
</script>    
</body>    
</html>

=========================================================================================================

Using Built-In Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    id:123456,
};
person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
};
document.getElementById("demo").innerHTML = "My father is " + person.name();    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Display Objects

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    name: "Ananda",
    age: 35,
    city: "Bangalore"
};
document.getElementById("demo").innerHTML = person;    
</script>    
</body>    
</html>

=========================================================================================================

Displaying Object Properties

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
name: "Ananda",
age: 35,
city: "Bangalore"
};
document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;     
</script>    
</body>    
</html>

=========================================================================================================

Displaying the Object in a Loop

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    name: "Ananda",
    age: 35,
    city: "Bangalore"
};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
};
document.getElementById("demo").innerHTML = txt;
</script>    
</body>    
</html>

=========================================================================================================

Using Object.values()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const person = {
    name: "Ananda",
    age: 35,
    city: "Bangalore"
};
document.getElementById("demo").innerHTML = Object.values(person);    
</Script>    
</body>    
</html>

=========================================================================================================

Using JSON.stringify()


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
name: "Ananda",
age: 35,
city: "Bangalore"
};
document.getElementById("demo").innerHTML = Object.values(person);
</script>    
</body>    
</html>

=========================================================================================================

Example 2 

Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>    
<script>
const person = {
    name: "Ananda",
    age: 35,
    city: "Chennai",
};
document.getElementById("demo").innerHTML = JSON.stringify(person);    
</script>
</body>    
</html>

=========================================================================================================

myString is now a JavaScript string, ready to be displayed:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    name: "Ananda",
    city: "Chennai",
    age: 35
};
document.getElementById("demo").innerHTML = JSON.stringify(person);    
</script>    
</body>    
</html>

=========================================================================================================

Stringify Dates

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
    name: "Ananda",
    today: new Date()
};    
document.getElementById("demo").innerHTML = JSON.stringify(person);
</script>    
</body>    
</html>

=========================================================================================================

Stringify Functions

JSON.stringify will not stringify functions:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    name: "Ananda",
    age: function () {return 25;}
};    
document.getElementById("demo").innerHTML = JSON.stringify(person);
</script>    
</body>    
</html>

=========================================================================================================
JSON.stringify will not stringify functions:
Example 2

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    name: "Ananda",
    age: function () {return 35;}
};
person.age = person.age.toString();
document.getElementById("demo").innerHTML = JSON.stringify(person);
</script>    
</body>    
</html>

=========================================================================================================

Stringify Arrays

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const arr = ["John", "Mark", "Bill", "Bob"];
document.getElementById("demo").innerHTML = JSON.stringify(arr);
</script>    
</body>    
</html>

=========================================================================================================
