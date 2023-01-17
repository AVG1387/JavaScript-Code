17-01-2023
Web Geolocation API

<!DOCTYPE html>
<html>
<body>
<button onclick="getLocation()">Try It</button>
<p id="demo"></p>
<script>
const x = document.getElementById("demo");
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
x.innerHTML = "Geolocation is not supported by this browser.";
}

}
function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}
</script>
</body>
</html>

=========================================================================================================

Handling Errors and Rejections
The second parameter of the getCurrentPosition() method is used to handle errors. It specifies a function to run if it fails to get the user's location:

<!DOCTYPE html>
<html>
<body>
<button onclick="getLocation()">Try It</button>
<p id="demo"></p>
<script>
const x = document.getElementById("demo");
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition, showError);
} else { 
x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
switch(error.code) {
case error.PERMISSION_DENIED:
x.innerHTML = "User denied the request for Geolocation."
break;
case error.POSITION_UNAVAILABLE:
x.innerHTML = "Location information is unavailable."
break;
case error.TIMEOUT:
x.innerHTML = "The request to get user location timed out."
break;
case error.UNKNOWN_ERROR:
x.innerHTML = "An unknown error occurred."
break;
}
}
</script>
</body>
</html>

=========================================================================================================
JS AJAX

AJAX Introduction

<!DOCTYPE html>
<html>
<body>
<div id="demo">
<button type="button" onclick="loadDoc()">Change Content</button>
</div>
<script>
function loadDoc() {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
document.getElementById("demo").innerHTML =
this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
}
</script>
</body>
</html>

=========================================================================================================
AJAX - The XMLHttpRequest Object
Define a Callback Function

<!DOCTYPE html>
<html>
<body>
<div id="demo"></div>
<button type="button" onclick="loadDoc()">Change Content</button>
<script>
function loadDoc() {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
document.getElementById("demo").innerHTML = this.responseText;
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
}    
</script>
</body>    
</html>

=========================================================================================================

The onload Property

<!DOCTYPE html>
<html>
<body>
<div id="demo">
<button id="button" onclick="loadDoc()">Change Content</button>    
</div>    
<script>
function loadDoc() {
 const xhttp = new XMLHttpRequest();
 xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
 }   
 xhttp.open("GET", "ajax_info.txt")
 xhttp.send();
}    
</script>
</body>    
</html>
=========================================================================================================
The onreadystatechange Property
The XMLHttpRequest Object

<!DOCTYPE html>
<html>
<body>
<div id="demo">
<button type="button" onclick="loadDoc()">Change Content</button>
</div>
<script>
function loadDoc() {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
document.getElementById("demo").innerHTML = this.responseText;
}
};
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
}
</script>
</body>
</html>

=========================================================================================================
AJAX Request

AJAX - XMLHttpRequest
GET Requests
A simple GET request:

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>
<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "demo_get.asp");
  xhttp.send();
}
</script>
</body>
</html>

=========================================================================================================
In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:

The XMLHttpRequest Object

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="loadDoc()">Request Data</button>
<p id="demo"></p>
<script>
function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "demo_get.asp?t=" + Math.random());
    xhttp.send();
}    
</script>    
</body>    
</html>
=========================================================================================================
If you want to send information with the GET method, add the information to the URL:

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="loadDoc()">Request Data</button>
<p id="demo"></p>
<script>
function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "demo_get2.asp?fname=Ananda&lname=Ganesh");
    xhttp.send();
}    
</script>    
</body>    
</html>

=========================================================================================================

POST Requests
A simple POST request:

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>
 <script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("POST", "demo_post.asp");
  xhttp.send();
}
</script>
</body>
</html>

=========================================================================================================
To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:

<!DOCTYPE html>
<html>
<body>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>
 <script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("POST", "demo_post2.asp");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford");
}
</script>
</body>
</html>

=========================================================================================================
Synchronous Request

<!DOCTYPE html>
<html>
<body>
<p id="demo">Let AJAX change this text.</p>
<button type="button" onclick="loadDoc()">Change Content</button>
<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "ajax_info.txt", false);
  xhttp.send();
  document.getElementById("demo").innerHTML = xhttp.responseText;
}
</script>
</body>
</html>

=========================================================================================================

AJAX Response
AJAX - Server Response
Server Response Properties
The responseText Property

<!DOCTYPE html>
<html>
<body>
<div id="demo">
<button type="button" onclick="loadDoc()">Change Content</button>
</div>
<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}
</script>
</body>
</html>

=========================================================================================================

The responseXML Property

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
 <script>
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("ARTIST");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();
</script>
</body>
</html>

=========================================================================================================
