20-01-2023

JS JSON - just an intro

JSON Syntax

JavaScript Objects
Access a JavaScript object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {name:"Ananda", age:35, city:"Bangalore"};
document.getElementById("demo").innerHTML = myObj.age;  
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
const myObj = {name:"Ananda", age:35, city:"Bangalore"};
document.getElementById("demo").innerHTML = myObj["name"];  
</script>  
</body>
</html>
=========================================================================================================

Data can be modified like this:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {name:"Ananda", age:30, city:"Bangalore" };
myObj.name = "Ganesh";
document.getElementById("demo").innerHTML = myObj.name;
</script>
</body>
</html>
=========================================================================================================

JSON vs XML

JSON Data Types

JSON.parse()

Use the JavaScript object in your page:	

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const txt = '{"name":"Ananda", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + "," + obj.age;   
</script>    
</body>    
</html>

=========================================================================================================
Array as JSON

When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const text = '[ "Ford","BMW", "AUDI", "Skoda"]'
const myArr = JSON.parse(text);
document.getElementById("demo").innerHTML = myArr[3];    
</script>    
</body>    
</html>

=========================================================================================================
Exceptions
Parsing Dates
Convert a string into a date:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const text = '{"name":"Ananda", "birth":"1986-12-14", "city":"Bangalore"}'
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;    
</script>    
</body>    
</html>

=========================================================================================================
Example
Convert a string into a date, using the reviver function:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const text = '{"name":"Ananda", "birth":"1986-12-14", "city":"Bangalore"}';
const obj = JSON.parse(text, function (key, value){
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;    
</script>    
</body>    
</html>

=========================================================================================================

Parsing Functions
Example - Convert a string into a function:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const text = '{"name":"Ananda", "age":"function() {return 35;}", "city":"Bangalore"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); 
</script>
</body>
</html>

=========================================================================================================

JSON.stringify()
myJSON is now a string, and ready to be sent to a server:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name:"Ananda", age:35, city:"Chennai"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;    
</script>    
</body>    
</html>


=========================================================================================================

Stringify a JavaScript Array

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const arr = ["John", "Bill", "Bob", "Mark"];
const myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;    
</script>    
</body>    
</html>

=========================================================================================================
Storing Data

Example - Storing data in local storage

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
</script>
</body>
</html>

=========================================================================================================
Exceptions
Stringify Dates
JSON.stringify() converts date objects into strings.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name:"Ananda", today:new Date(), city:"Bangalore"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;    
</script>    
</body>    
</html>

=========================================================================================================
Stringify Functions
JSON.stringify() will remove any functions from an object.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name: "Ananda", age: function () {return 35;}, city: "Bangalore"};
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;    
</script>    
</body>    
</html>

=========================================================================================================
JSON.stringify() will remove any functions from an object.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {name: "Ananda", age: function () {return 35;}, city: "Bangalore"};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;
</script>
</body>
</html>

=========================================================================================================