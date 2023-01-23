23-01-2023
JSON Server

Sending Data

<!DOCTYPE html>
<html>
<body>
<script>
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
</script>
</body>
</html>

=========================================================================================================

Receiving Data
If you receive data in JSON format, you can easily convert it into a JavaScript object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const myJSON = '{"name":"Ananda", "age":35, "city":"Bangalore"}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name; 
</script>  
</body>  
</html>

=========================================================================================================
JSON From a Server

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();
</script>
</body>
</html>


=========================================================================================================
Array as JSON
Fetch a JSON file with XMLHttpRequest
Content written as an JSON array will be converted into a JavaScript array.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
}
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();
</script>
</body>
</html>

=========================================================================================================
JSON PHP
The Client JavaScript

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "demo_file.php");
xmlhttp.send();
</script>
</body>
</html>

=========================================================================================================
The Client JavaScript

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[2];
}
xmlhttp.open("GET", "demo_file_array.php");
xmlhttp.send();
</script>
</body>
</html>

=========================================================================================================

PHP Database

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const dbParam = JSON.stringify({"limit":10});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
document.getElementById("demo").innerHTML = this.responseText;
}
xmlhttp.open("GET", "json_demo_db.php?x=" + dbParam);
xmlhttp.send();
</script>
</body>
</html>

=========================================================================================================

PHP Method = POST
When sending data to the server, it is often best to use the HTTP POST method.

To send AJAX requests using the POST method, specify the method, and the correct header.

The data sent to the server must now be an argument to the send() method:


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const Obj = { "limit":10 };
const dbParma = JSON.stringify(obj);
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  myObj = JSON.parse(this.responseText);
  let text = "";
  for (let x in myObj) {
    text += myObj[x].name + "<br>";

  }
  document.getElementById("demo").innerHTML = text;
};
xmlhttp.open("GET", "josn_demo_db.php?x=" + dbParma);
xmlhttp.send();
<p>Try chnaging the "limit" property form 10 to 5.</p>
</script>  
</body>  
</html>

=========================================================================================================

JSON HTML
HTML Table
Make an HTML table with data received as JSON: (Out result are not displaying)


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<table border='1'>"
  for (let x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"    
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
</script>
</body>
</html>

=========================================================================================================

HTML Drop Down List
Make an HTML drop down list with data received as JSON: (Out result are not displaying)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<select>"
  for (let x in myObj) {
    text += "<option>" + myObj[x].name + "</option>";
  }
  text += "</select>"
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
</script>
</body>
</html>
=========================================================================================================
JSONP

The JavaScript function
The function named "myFunc" is located on the client, and ready to handle JSON data:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}
</script>
<script src="demo_jsonp.php"></script>
</body>
</html>

=========================================================================================================
Creating a Dynamic Script Tag
Click the Button.
A script tag with a src attribute is created and placed in the document.
The PHP file returns a call to a function with the JSON object as a parameter.

<!DOCTYPE html>
<html>
<body>
<button onclick="clickButton()">Click me!</button>
<p id="demo"></p>
<script>
function clickButton() {
  let s = document.createElement("script");
  s.src = "demo_jsonp.php";
  document.body.appendChild(s);
}
function myFunc(myObj) {
  document.getElementById("demo").innerHTML = myObj.name;
}
</script>
</body>
</html>

=========================================================================================================

Dynamic JSONP Result

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = { table: "customers", limit: 10 };
let s = document.createElement("script");
s.src = "jsonp_demo_db.php?x=" + JSON.stringify(obj);
document.body.appendChild(s);

function myFunc(myObj) {
  let txt = "";
  for (let x in myObj) {
    txt += myObj[x].name + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>
</body>
</html>

=========================================================================================================

Callback Function

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let s = document.createElement("script");
s.src = "demo_jsonp2.php?callback=myDisplayFunction";
document.body.appendChild(s);
function myDisplayFunction(myObj) {
document.getElementById("demo").innerHTML = myObj.name;
}
</script>
</body>
</html>

=========================================================================================================

JS vs jQuery

jQuery vs JavaScript
Finding HTML Element by Id
Return the element with id="id01":

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<p id="id01">Hello World!</p>
<p id="id02">Hello Sweden!</p>
<p id="id03">Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function() {
  var myElements = $("#id01");
  $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});
</script>
</body>
</html>

=========================================================================================================
JavaScript

<!DOCTYPE html>
<html>
<body>
<p id="id01">Hello World!</p>
<p id="id02">Hello Sweden!</p>
<p id="id03">Hello Japan!</p>
<p id="demo"></p>
<script>
const myElement = document.getElementById("id01");
document.getElementById("demo").innerHTML = "The text from the id01 paragraph is: " + myElement.innerHTML;
</script>
</body>
</html>

=========================================================================================================

Finding HTML Elements by Tag Name
Return all <p> elements:jQuery

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<p>Hello World!</p>
<p>Hello Sweden!</p>
<p>Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function() {
  var myElements = $("p");
  $("#demo").text("The text in the first paragraph is: " + myElements[0].innerHTML);
});
</script>
</body>
</html>

=========================================================================================================

JavaScript - Finding HTML Elements by Tag Name


<!DOCTYPE html>
<html>
<body>
<p>Hello World!</p>
<p>Hello Sweden</p>
<p>Hello Japan</p>
<p id="demo"></p>    
<script>
const myElements = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The text is the first paragraph is: " + myElements[0].innerHTML;    
</script>
</body>
</html>

=========================================================================================================

Finding HTML Elements by Class Name
Return all elements with class="intro".

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
<p class="intro">Hello World!</p>
<p class="intro">Hello Sweden!</p>
<p class="intro">Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function() {
  var myElements = $(".intro");
  $("#demo").text("The first paragraph with class='intro' is: " + myElements[0].innerHTML);
});
</script>
</body>
</html>

=========================================================================================================
JavaScript - Finding HTML Elements by Class Name

<!DOCTYPE html>
<html>
<body>
<p class="intro">Hello World!</p>
<p class="intro">Hello Japan!</p>
<p class="intro">Hello Sweden!</p>
<p id="demo"></p>
<script>
const myElements = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = "The first paragraph with class'intro' is: " + myElements[0].innerHTML;    
</script>
</body>    
</html>

=========================================================================================================

Finding HTML Elements by CSS Selectors
Return a list of all <p> elements with class="intro".

jQuery - Finding HTML Elements by Query Selector

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<p class="intro">Hello World!</p>
<p class="intro">Hello Sweden!</p>
<p class="intro">Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function() {
  var myElements = $("p.intro");
  $("#demo").text("The first paragraph with class='intro' is: " + myElements[0].innerHTML);
});
</script>
</body>
</html>

=========================================================================================================

JavaScript - Finding HTML Elements by Query Selector

<!DOCTYPE html>
<html>
<body>
<p class="intro">Hello World!</p>
<p class="intro">Hello Sweden!</p>
<p class="intro">Hello Japan!</p>
<p id="demo"></p>
<script>
const myElements = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
"The first paragraph with class='intro' is: " + myElements[0].innerHTML;
</script>
</body>
</html>
=========================================================================================================