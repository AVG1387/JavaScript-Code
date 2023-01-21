21-01-2023
JSON Object Literals

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myObj = {"name":"Ananda", "age":35, "car":null};
document.getElementById("demo").innerHTML = myObj.name;    
</script>    
</body>    
</html>

=========================================================================================================

Example - Normally, you create a JavaScript object by parsing a JSON string:
Creating an Object Parsing JSON

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;    
</script>    
</body>    
</html>

=========================================================================================================
Accessing Object Values
Access a JavaScript Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"Ananda", "age":35, "car":null}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;    
</script>    
</body>    
</html>

=========================================================================================================

You can also access object values by using bracket ([]) notation:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"Ananda", "age":35, "car":null}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj["name"];
</script>    
</body>    
</html>
=========================================================================================================
Looping an Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"Ananda", "age":35, "car":null}';
const myObj = JSON.parse(myJSON);

let text = "";
for (const x in myObj) {
    text += x + ", ";
}
document.getElementById("demo").innerHTML = text;
</script>    
</body>    
</html>

=========================================================================================================
Example = In a for-in loop, use the bracket notation to access the property values:

Looping JavaScript Object Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
let text = "";
for (const x in myObj) {
  text += myObj[x] + ", ";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================
JSON Array Literals
Creating an Array from a Literal

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myArray = ["Ford", "BMW", "Fiat"];
document.getElementById("demo").innerHTML = myArray;    
</script>    
</body>    
</html>

=========================================================================================================

Creating an Array from JSON

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '["Ford", "BMW", "Fiat", "Skoda"]';
const myArray = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myArray;
</script>
</body>
</html>

=========================================================================================================

Accessing Array Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myArray[0];
</script>
</body>
</html>

=========================================================================================================
Access Array Values

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.cars[0];
</script>
</body>
</html>
=========================================================================================================

Looping Through an Array

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
let text = "";
for (let i in myObj.cars) {
  text += myObj.cars[i] + ", ";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================

Looping an Array

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(myJSON);
let text = "";
for (let i = 0; i < myObj.cars.length; i++) {
  text += myObj.cars[i] + ", ";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================


