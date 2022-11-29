23-11-2022  - JavaScript HTML

JavaScript HTML DOM

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p><p id="intro">Finding HTML Elements by Id</p>
<script>
const element = document.getElementById("intro");
document.getElementById("demo").innerHTML = "The text from the intro paragraph is: " + element.innerHTML;    
</script>    
</body>    
</html>

==========================================================================================================

JavaScript HTML DOM
Finding HTML Elements by Tag Name.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const element = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
</script>
</body>
</html>

==========================================================================================================

JavaScript HTML DOM
Finding HTML Elements by Tag Name

<!DOCTYPE html>
<html>
<body>
<div id="main">
<p>This example demonstrates the <b>getElementsByTagName</b> method.</p>
</div>
<p id="demo"></p>
<script>
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
</script>
</body>
</html>

==========================================================================================================

JavaScript HTML DOM
Finding HTML Elements by Class Name.

<!DOCTYPE html>
<html>
<body>
<p>Finding HTML Elements by Class Name.</p>
<p class="intro">Hello World!</p>
<p class="intro">This example demonstrates the
<b>getElementsByClassName</b> method.</p>
<p id="demo"></p>
<script>
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 
'The first paragragh (index 0) with class="intro" is: ' + x[0].innerHTML; 
</script>    
</body>    
</html>

==========================================================================================================

JavaScript HTML DOM
Finding HTML Elements by Query Selector


<!DOCTYPE html>
<html>
<body>
<p>Finding HTML Elements by Query Selector</p>
<p class="intro">Hello World!.</p>
<p class=""intro">This example demonstrates the <b>querySelectorAll</b> method.</p>
<p id="demo"></p>
<script>
const x = document.querySelectorAll("p,intro");
document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;    
</script>    
</body>    
</html>
==========================================================================================================



<!DOCTYPE html>
<html>
<body>
<p>Finding HTML Elements Using <b>document.forms</b>.</p>
<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form> 
<p>These are the values of each element in the form:</p>
<p id="demo"></p>
<script>
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

==========================================================================================================

JavaScript HTMLDOM

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Number of embeds: " + document.embeds.length;    
</script>    
</body>    
</html>

==========================================================================================================

Finding HTML Elements Using document.title
The title of this document is: W3Schools Demo

<!DOCTYPE html>
<html>
<head>
<title>W3schools Demo</title>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"The title of  this docuemtn is: " + document.title;   
</script>        
</head>    
</html>

==========================================================================================================

Finding HTML Elements Using document.scripts

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Number of Scripts: " + document.scripts.length;    
</script>    
</body>    
</html>


==========================================================================================================

Finding HTML Elements Using document.links

<!DOCTYPE html>
<html>
<body>
<p>
<a href="/html/default.asp">HTML</a>
<br>
<a href="/css/default.asp">CSS</a>
</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Number of links: " + document.links.length;
</script>
</body>    
</html>

==========================================================================================================

Finding HTML Elements Using document.images

<!DOCTYPE html>
<html>
<body>
<img src="pic_htmltree.gif" width="486" height="266">
<img src="pic_navigate.gif" width="362" height="255">
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
"Number of images: " + document.images.length;
</script>
</body>
</html>

==========================================================================================================

JavaScript HTMLDOM
[object HTMLHeadElement]

<!DOCTYPE html>
<html>
<head>
<title>W3Schools Demo</title>
</head>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
document.head;
</script>
</body>
</html>

==========================================================================================================

Finding HTML Elements Using document.forms

<!DOCTYPE html>
<html>
<body>
<form action="">
First name: <input type="text" name="fname" value="Donald">
<input type="submit" value="Submit">
</form> 
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
"Number of forms: " + document.forms.length;
</script>
</body>
</html>

==========================================================================================================

JavaScript HTML DOM - Changing HTML

<!DOCTYPE html>
<html>
<body>
<p id="p1">Hello World!</p>    
<script>
document.getElementById("p1").innerHTML = "New HTML!"; 
</script>
</body>
</html>

==========================================================================================================

New Heading

JavaScript changed "Old Heading" to "New Heading".

<!DOCTYPE html>
<html>
<body>
<h1 id="id01">old heading</h1> 
<script>
const element = document.getElementById("id01");
element.innerHTML = "New Heading";    
</script>   
</body>    
</html>

==========================================================================================================

Changing the Value of an Attribute

JavaScript HTML DOM


<!DOCTYPE html>
<html>
<body>
<img id="image" src="smiley.gif" width="160" height="120">
<script>
document.getElementById("image").src = "landscape.jpg";
</script>
</body>
</html>

==========================================================================================================

Dynamic HTML content
JavaScript can create dynamic HTML content:


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Date: " + Date();    
</script>    
</body>    
</html>

==========================================================================================================

document.write()

Bla, bla, bla

Mon Nov 28 2022 12:55:58 GMT+0530 (India Standard Time)
Bla, bla, bla

==========================================================================================================

JavaScript Forms

HTML Form Example


<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}    
</script>    
</head>    
</body>
<h2>Javascript Validation</h2>
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
</html>
</body>

==========================================================================================================

Automatic HTML Form Validation

JavaScript Validation

<!DOCTYPE html>
<html>
<body>
<form action="/action_page.php" method="post">
<input type="text" name="fname" required>
<input type="submit" value="Submit">    
</form>    
<p>If you click submit, without filling out the text field, your browser will display an error message.</p>
</body>
</html>
==========================================================================================================

JavaScript HTML DOM - Changing CSS

<!DOCTYPE html>
<html>
<bopdy>
<p id="p1">Hello Ananda</p>
<p id="p2">Hello Ananda</p>
<script>
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontSize = "larger";
document.getElementById("p2").style.fontFamily = "Arial";
</script>
</bopdy>    
</html>

==========================================================================================================

<!DOCTYPE html>
<html>
<body>
<h1 id="id1">My Heading!</h1>
<button type="button"   
onclick="document.getElementById('id1').style.color = 'green'">Click Me</button> 
</body>    
</html>

==========================================================================================================
	
JavaScript HTML DOM Animation

<!Doctype html>
<html>
<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: greenyellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background: blanchedalmond;
}
</style>
<body>
<div id="container">
<div id="animate"></div>
</div>
</body>
</html>

==========================================================================================================

Create the Full Animation Using JavaScript

<!DOCTYPE html>
<html>
<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: red;
}
</style>
<body>

<p><button onclick="myMove()">Click Me</button></p> 

<div id ="container">
  <div id ="animate"></div>
</div>

<script>
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
</script>

</body>
</html>

==========================================================================================================

JavaScript HTML DOM Events

<!DOCTYPE html>
<html>
<body>
<h2>Javascript HTML Events</h2>
<h2 onclick="this.innerHTML='Ooops'">Click on this text!</h2>    
</body>    
</html>
==========================================================================================================
In this example, a function is called from the event handler:

<!DOCTYPE html>
<html>
<body>
<h2 onclick="changeText(this)">Click on this text</h2>
<script>
function changeText(id) {
    id.innerHTML = "0000ps"
}    
</script>
</body>    
</html>

==========================================================================================================

HTML Event Attributes
To assign events to HTML elements you can use event attributes

<!DOCTYPE html>
<html>
<body>
<p>Click the button to display the date.</p>
<p id="demo"></p>
<button onclick="displayDate()">The time is</button>
<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
</body>
</html> 

==========================================================================================================

29-11-2022

JavaScript HTML Events

<!DOCTYPE html>
<html>
<body onload="checkCookies()"></body>
<p id="demo"></p>
<script>
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  }else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("demo").innerHTML = text;
}  
</script>  
</html>
</body>

==========================================================================================================	

The onchange Event

<!DOCTYPE html>
<html>
<body>
Enter your name: <input type="text" id="fname" onchange="upperCase()">
<script>
function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}  
</script>  
</body>  
</html>

==========================================================================================================	

The onmouseover and onmouseout Events

<!DOCTYPE html>
<html>
<body>
<div onmouseover="mOver(this)" onmouseout="mOut(this)"
style="background-color: orangered;width:125px;height:136px;padding:123px;">Mouse over me</div>

<script>
  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
function mOut(obj) {
  obj.innerHTML = "Mouse over here"
}
</script>
</body>  
</html>

==========================================================================================================	

The onmousedown, onmouseup and onclick Events

<!DOCTYPE html>
<html>
<body>
<div onmousedown="mDown(this)" onmouseup="mUp(this)"
style="background-color:#D94A38;width:90px;height:20px;padding:40px;">
Click Me</div>
<script>
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}
</script>
</body>
</html> 

==========================================================================================================	

onload - Display an alert box when the page has finished loading.

<!DOCTYPE html>
<html>
<head>
  <script>
function mymessage() {
  alert("This message was triggered from the onload event");
}    
  </script>
</head>  
<body onload="mymessage()"></body>
</html>

==========================================================================================================

onfocus - Change the background-color of an input field when it gets focus.

<!DOCTYPE html>
<html>
<head>
  <script>
    function myFunction(x) {
      x.style.background = "purple";
    }
</script>
</html>
<body>
  Enter your name: <input type="text" onfocus="myFunction(this)">
</body>
</html>

=========================================================================================================
Mouse Events

<!DOCTYPE html>
<html>
<body>
  <h1 onmouseover="style.color='grey'"
  onmouseout="style.color='brown'">Mouse over this text</h1>
</body>
</html>

=========================================================================================================