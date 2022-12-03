JavaScript HTML DOM EventListener

The addEventListener() method

<!DOCTYPE html>
<html>
<body>
<button id="myBtn">Try Me</button>
<script>
document.getElementById("myBtn").addEventListener("click",
function(){
  alert("Hello World");
});  
</script>  
</body> 
</html>


=========================================================================================================

Alert "Hello World!" when the user clicks on an element:

<!DOCTYPE html>
<html>
<body>
<button id="myBtn">Try Me</button>
<script>
document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction() {
  alert("Hello World;")
}  
</script>  
</body>  
</html>

=========================================================================================================

Add Many Event Handlers to the Same Element

<!DOCTYPE html>
<html>
<body>
<button id="myBtn">Try Me</button>
<script>
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);
function myFunction() {
  alert("Hello Andy");
}
function someOtherFunction() {
  alert("Anand is from Kengeri Uppanager");
}
</script>  
</body>  
</html>

=========================================================================================================

JavaScript addEventListener()
This example uses the addEventListener() method to add many events on the same button.

<!DOCTYPE html>
<html>
<body>
<button id="myBtn">Try Me</button>  
<p id="demo"></p>
<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);
function myFunction() {
  document.getElementById("demo").innerHTML += "Moused Over!<br>"; 
}
function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}
function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused Out!<br>";
}
</script>
</body>  
</html>

=========================================================================================================

Add an Event Handler to the window Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = Math.random();
});  
</script>  
</body>  
</html>

=========================================================================================================

Passing Parameters


<!DOCTYPE html>
<html>
<body>
<button id="myBtn">Click Me</button>  
<p id="demo"></p>
<script>
let p1 = 3;
let p2 = 5;
document.getElementById("myBtn").addEventListener("click", function(){
  myFunction(p1, p2);
});
function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a * b;
}   
</script>
</body>  
</html>

=========================================================================================================

Event Bubbling or Event Capturing?

JavaScript addEventListener()    (need to practise more + 2 to 5 times)



<!DOCTYPE html>
<html>
<head>
<style>
#myDiv1, #myDiv2 {
  background-color: coral;
  padding: 50px;
}
#myP1, #myP2 {
  background-color: white; 
  font-size: 20px;
  border: 1px solid;
  padding: 20px;
}
</style>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
</head>
<body>
<div id="myDiv1">
  <h2>Bubbling:</h2>
  <p id="myP1">Click me!</p>
</div><br>
<div id="myDiv2">
  <h2>Capturing:</h2>
  <p id="myP2">Click me!</p>
</div>
<script>
document.getElementById("myP1").addEventListener("click", function() {
  alert("You clicked the white element!");
}, false);
document.getElementById("myDiv1").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
  alert("You clicked the white element!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
  alert("You clicked the orange element!");
}, true);
</script>
</body>
</html>

=========================================================================================================

The removeEventListener() method

(need to practise more + 2 to 5 times)

<!DOCTYPE html>
<html>
<head>
<style>
#myDIV {
  background-color: coral;
  border: 1px solid;
  padding: 50px;
  color: white;
  font-size: 20px;
}
</style>
</head>
<body>
<div id="myDIV">
  <p>This div element has an onmousemove event handler that displays a random number every time you move your mouse inside this orange field.</p>
  <p>Click the button to remove the div's event handler.</p>
  <button onclick="removeHandler()" id="myBtn">Remove</button>
</div>
<p id="demo"></p>
<script>
document.getElementById("myDIV").addEventListener("mousemove", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}
function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}
</script>
</body>
</html>

=========================================================================================================
01-12-2022

JavaScript HTML DOM Navigation

Example 1

<!DOCTYPE html>
<html>
<body>
<h1 id="id01">My first page</h1>
<p id="id02"></p>
<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;  
</script>  
</body>  
</html>

=========================================================================================================

Example 2

<!DOCTYPE html>
<html>
<body>
<h1 id="id01">My first page</h1>
<p id="id02"></p>
<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;  
</script>  
</body>  
</html>

=========================================================================================================
	
Example 3

<!DOCTYPE html>
<html>
<body>
<h1 id="id01">My First Page</h1>
<p id="id02"></p>
<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
</script>  
</body>  
</html>
=========================================================================================================

DOM Root Nodes

<!DOCTYPE html>
<html>
<body>
<p>Displaying document.body</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = document.body.innerHTML;
</script>
</body>
</html>
	
=========================================================================================================

Displaying document.documentElement

<!DOCTYPE html>
<html>
<body>
<p>Displaying document.documentElement</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = document.documentElement.innerHTML;  
</script>  
</body>  
</html>
=========================================================================================================

<!DOCTYPE html>
<html>
<body>
<h1 id="id01">My first Page</h1>
<p id="id02"></p>
<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;  
</script>
</body>  
</html>

=========================================================================================================

JavaScript HTML DOM Elements (Nodes)

<!DOCTYPE html>
<html>
<body>
<div id="div1">
<p id="p1">This is a prargraph</p>
<p id="p">This is another prargraph</p>
</div>  
<script>
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const element = document.getElementById("div1");
  element.appendChild(para);
</script>
</body>  
</html>

=========================================================================================================

Creating new HTML Elements - insertBefore()

<!DOCTYPE html>
<html>
<body>
<div id="div1">
<p id="p1">This is a paragraph</p>
<p id="p2">This is another paragraph</p>
<script>
 const para = document.createElement("p");
 const node = document.createTextNode("This is new.");
 para.appendChild(node);
 const element = document.getElementById("div1");
 element.appendChild(para);   
</script>
</div>    
</body>    
</html>

=========================================================================================================

Removing Existing HTML Elements
To remove an HTML element, use the remove() method:

<!DOCTYPE html>
<html>
<body>
<div>
<p id="p1">This is a paragraph</p>
<p id="p2">This is another paragraph</p>
</div>
<button onclick="myFunction()">Remove Me</button>
<script>
function myFunction() {
    document.getElementById("demo").remove();
}
</script>
</body>    
</html>
=========================================================================================================

Removing a Child Node


<!DOCTYPE html>
<html>
<body>
<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
</body>
</html>

=========================================================================================================

Replacing HTML Elements 

<!DOCTYPE html>
<html>
<body>
<div id="div1">
<p id="p1">This is a paragraph</p>
<p id="p2">This is a paragraph</p>
</div>    
<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
parent.replaceChild(para,child);    
</script>
</body>    
</html>

=========================================================================================================	

JavaScript HTML DOM Collections	
 HTML HTMLCollection Length

<!DOCTYPE html>
<html>
<body>
    <p>Hello World!</p>
    <p>Hello USA!</p>
<p id="demo"></p>
<script>
const myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "This document contains " + myCollection.length + " paragraphs.";    
</script>
</body>    
</html>

=========================================================================================================	

 HTML HTMLCollection Length

<!DOCTYPE html>
<html>
<body>
<p>Hello World</p>
<p>Hello Anand</p>    
<p>Click the button to change the color of all p elements</p>
<button onclick="myFunction()">Try Me</button>
<script>
function myFunction() {
    const myCollection = document.getElementsByTagName("p");
    for (let i=0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}    
</script>
</body>    
</html>

=========================================================================================================	

03-12-2022

JavaScript HTML DOM Node Lists


<!DOCTYPE html>
<html>
<body>
<p>Hello World</p>
<p>Hello Ganesh</p>    
<p id="demo"></p>
<script>
const myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "This is innerHTMl of second paragragh is: " + myNodelist[1].innerHTML;    
</script>
</body>    
</html>

=========================================================================================================	

HTML DOM Node List Length

<!DOCTYPE html>
<html>
<body>
<p>Hello World</p>
<p>Hello Ganesh</p>
<p id="demo"></p>
<script>
const myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = "This document contains: " + myNodelist.length + " paragraph";    
</script>    
</body>    
</html>

=========================================================================================================	

Change the color of all <p> elements in a node list:

<!DOCTYPE html>
<html>
<body>
<p>Hello World</p>
<p>Hello Ganesh</p>
<button onclick="myFunction()">Try me</button>
<script>
function myFunction() {
    const myNodelist = document.querySelectorAll("p");
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "blue";
    }
}    
</script>        
</html>

=========================================================================================================	

JavaScript Versions

use strict

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const str = "Hello World";
document.getElementById("demo").innerHTML = str.charAt(8);    
</script> 
</body>    
</html>


=========================================================================================================		

String[number] access

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const str = "Hello World!";
document.getElementById("demo").innerHTML = str.charAt(3);
</script>
</body>    
</html>
=========================================================================================================

Multiline strings

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Hello \ Ganesh";    
</script>
</body>    
</html>

=========================================================================================================

String.trim()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
let text1 = "             Hello Ganesh         ";
let text2 = text1.trim();
document.getElementById("demo").innerHTML = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;    
</script>    
</body>    
</html>

=========================================================================================================

Array.isArray()

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Try Me</button>
<p id="demo"></p>
<script>
function myFunction() {
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = document.getElementById("demo");
x.innerHTML = Array.isArray(fruits);     
}    
</script>    
</body>    
</html>

=========================================================================================================

Array forEach()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var txt = "";
var numbers = [12, 45, 56, 78];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
    txt = txt + value  + "<br>";
}
    
</script>
</body>    
</html>

=========================================================================================================

Array map()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers1 = [45,12,58,13,78];
var numbers2 = numbers1.map(myFunction);    
document.getElementById("demo").innerHTML = numbers2;
function myFunction(value, index, array) {
    return value * 4;
}
</script>    
</body>    
</html>

=========================================================================================================

Array filter()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [45, 69, 12, 03,02,00,];
var over8 = numbers.filter(myFunction);
document.getElementById("demo").innerHTML = over8;
function myFunction(value, array, index) {
    return value > 8;
}    
</script>    
</body>    
</html>

=========================================================================================================

Array reduce()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var numbers = [12,45,78,89,23];
var sum = numbers.reduce(myFunction);
document.getElementById("demo").innerHTML = "The sum is " + sum;
function myFunction(total, value, index, array) {
  return total + value;
}
</script>
</body>
</html>

=========================================================================================================