13-01-2023

JavaScript Timing Events

The setTimeout() Method

<!DOCTYPE html>
<html>
<body>
<button onclick="setTimeout(myFunction,3000);">Try it</button>
<script>
function myFunction(){
    alert("Hello");
}    
</script>    
</body>    
</html>

=========================================================================================================
How to Stop the Execution?

<!DOCTYPE html>
<html>
<body>
<button onclick="myVar = setTimeout(myFunction, 3000);">Try it</button>  
<button onclick="clearTimeout(myVar)">Stop it</button>
<script>
function myFunction() {
    alert("Hello");
}    
</script>  
</body>    
</html>

=========================================================================================================

The setInterval() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
setInterval(myTimer, 2000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString(); 
}    
</script>    
</body>    
</html>
=========================================================================================================
How to Stop the Execution?

Same example as above, but we have added a "Stop time" button:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<button onclick="clearInterval(myVar)">Stop Time</button>
<script>
let myVar = setInterval(myTimer,1000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}    
</script>    
</body>    
</html>

=========================================================================================================

Another simple timing

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
setTimeout(myTimeout1, 2000);
setTimeout(myTimeout2, 4000);
setTimeout(myTimeout3, 6000);
function myTimeout1() {
    document.getElementById("demo").innerHTML = "2 seconds";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "4 seconds";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "6 seconds";
}
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Clock

<!DOCTYPE html>
<html>
<body onload="startTime()">
<div id="txt"></div>
<script>
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
</script>
</body>
</html>

=========================================================================================================

JavaScript Cookies (Need to work on it more)

<!DOCTYPE html>
<html>
<head>
<script>
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
</script>
</head>
<body onload="checkCookie()"></body>
</html>

=========================================================================================================

JS Web APIs
Web APIs - Introduction

Browser APIs
Get the latitude and longitude of the user's position:

<!DOCTYPE html>
<html>
<body>
<button onclick="getLocation()">Try it</button>
<p id="demo"></p>
<script>
const x = document.getElementById("demo");
function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);

    }catch {
        x.innerHTML = err;
    }
}    
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
</script>    
</body>    
</html>

=========================================================================================================
JavaScript Validation API
The checkValidity() Method

<!DOCTYPE html>
<html>
<body>
<input id="id1" type="number" min="100" max="300" required>    
<button onclick="myFunction()">OK</button>
<p id="demo"></p>
<script>
function myFunction(){
const inpObj = document.getElementById("id1");

if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validateMessaage;
} else {
    document.getElementById("demo").innerHTML = "Input OK";
}
}    
</script>
</body>    
</html>

=========================================================================================================
Validity Properties

The rangeOverflow Property

<!DOCTYPE html>
<html>
<body>
<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>    
<p id="demo"></p>
<script>
function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeOverflow) {
        text = "Value too large";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}    
</script>
</body>    
</html>

=========================================================================================================

If the number in an input field is less than 100 (the input's min attribute), display a message:

The rangeUnderflow Property

<!DOCTYPE html>
<html>
<body>
<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>
<p id="demo"></p>
<script>
function myFunction() {
    let text;
    if (document.getElementById("id1").validity.rangeUnderflow) {
        text = "Value too small";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}    
</script>    
</body>    
</html>

=========================================================================================================
16-01-2022
Web History API

The History back() Method

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Go Back</button>
<p id="demo"></p>
<script>
function myFunction(){
    window.history.back();
}    
</script>    
</body>    
</html>

=========================================================================================================

The History go() Method

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Go back 2 pages</button>
<p id="demo"></p>
<script>
function myFunction() {
    window.history.back(-2);
}    
</script>    
</body>    
</html>

=========================================================================================================

Web Storage API

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
localStorage.setItem("name","Ananda Ganesh");
document.getElementById("demo").innerHTML = localStorage.getItem("name");    
</script>    
</body>    
</html>

=========================================================================================================
The sessionStorage Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
sessionStorage.setItem("name", "Ananda Ganesh");
document.getElementById("demo").innerHTML = sessionStorage.getItem("name");    
</script>    
</body>    
</html>

=========================================================================================================

Storage key() Method

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Get the name of the first local language</button>
<p id="demo"></p>
<script>
function myFunction(){
    var x = localStorage.key(0);
    document.getElementById("demo").innerHTML = x;
}    
</script>    
</body>    
</html>

=========================================================================================================

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Create session storage items</button>
<button onclick="myFunction()">Get the item name</button>
<p id="demo"></p>
<script>
function createItems() {
    sessionStorage.test1 = "Hello";
sessionStorage.test1 = "Jim";
    sessionStorage.test1 = "358";
}    
function myFunction() {
    var x = localStorage.key(0);
    document.getElementById("demo").innerHTML = x;
}
</script>    
</body>    
</html>

=========================================================================================================

Example2  - Loop through each local storage item and display the names:

<!DOCTYPE html>
<html>
<body>
<button onclick="createItems()">Create local storage items</button>
<h2>Display Items</h2>
<button onclick="displayItems()">Display items</button>
<p id="demo"></p>
<script>
function createItems() {
  localStorage.setItem("mytime", Date.now());
  localStorage.setItem("myname", "John");
  localStorage.setItem("myage", 36);
}

function displayItems() {
  var l, i;
  document.getElementById("demo").innerHTML = "";
  for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);
  document.getElementById("demo").innerHTML += x + "<br>";
  }
}
</script>
</body>
</html>

=========================================================================================================
The Storage length Property

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Get the number of stored items</button>
<p id="demo"></p>
<script>
function myFunction() {
    var x = localStorage.length;
    document.getElementById("demo").innerHTML = x;
}    
</script>    
</body>    
</html>

=========================================================================================================
Example 2

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Get the session storage items</button>
<button onclick="createItems()">Create session storage items</button>
<p id="demo"></p>
<script>
function createItems() {
    sessionStorage.test1 = "hello";
sessionStorage.test2 = "Jim";
sessionStorage.test3 = "356";
}    
function myFunction() {
    var x = localStorage.length;
    document.getElementById("demo").innerHTML = x;
}
</script>    
</body>    
</html>
=========================================================================================================

Example 2 - Loop through each local storage item and display the names:

<!DOCTYPE html>
<html>
<body>
<button onclick="createItems()">Create local storage</button>
<h1>Display createItems</h1> 
<button onclick="displayItems()">Display Items</button>
<p id="demo"></p>
<script>
function createItems() {
    localStorage.setItem("mytime", Date.now());
    localStorage.setItem("myname", "Ananda");
    localStorage.setItem("myage", 35);
}    
function displayItems() {
    var l, i;
    document.getElementById("demo").innerHTML = "";
    for(i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i);
        document.getElementById("demo").innerHTML += x + "<br>"; 
    }

}
</script>   
</body>    
</html>

=========================================================================================================

Storage removeItem() Method
<!DOCTYPE html>
<html>
<body>
<button onclick="createItem()">Create local storage item</button>

<button onclick="deleteItem()">Delete item</button>
<h2>Display Item</h2>
<button onclick="displayItem()">Display item</button>
<p id="demo"></p>
<script>
function createItem() {
  localStorage.mytime = Date.now();
}
function deleteItem() {
  localStorage.removeItem("mytime");
}
function displayItem() {
  var x = localStorage.getItem("mytime");
  document.getElementById("demo").innerHTML = x;
}
</script>
</body>
</html>

=========================================================================================================
Storage setItem() Method

Set the value of the specified local storage item:

<!DOCTYPE html>
<html>
<body>
<button onclick="createItem()">Set local storage item</button>
<button onclick="readValue()">Get the item value</button>
<p id="demo"></p>
<script>
function createItem() {
  localStorage.setItem("mytime", Date.now());
}
function readValue() {
  var x = localStorage.getItem("mytime");
  document.getElementById("demo").innerHTML = x;
}
</script>
</body>
</html>

=========================================================================================================

The Storage setItem() Method
This example demonstrates how to use the setItem() method to set the value of a specified session storage item.

<!DOCTYPE html>
<html>
<body>
<button onclick="createItem()">Set session storage item</button>
<button onclick="readValue()">Get the item value</button>
<p id="demo"></p>
<script>
function createItem() {
    sessionStorage.setItem("test1", "Lorem ipsum");
}    
function readValue() {
    var x = sessionStorage.getItem("test1");
    document.getElementById("demo").innerHTML = x;
}
</script>    
</body>    
</html>
=========================================================================================================

Example - You can also set the value by using dot notation (obj.key):

<!DOCTYPE html>
<html>
<body>
<button onclick="createItem()">Create session storage item</button>
<button onclick="myFunction()">Get the item value</button>
<p id="demo"></p>
function createItem() {
  sessionStorage.test1 = "hello";
}

function myFunction() {
  var x = sessionStorage["test1"];
  document.getElementById("demo").innerHTML = x;
}
</body>    
</html>

=========================================================================================================

Example - You can also set the value like this:

<!DOCTYPE html>
<html>
<body>
<button onclick="createItem()">Create session storage item</button>
<button onclick="myFunction()">Get the item value</button>
<p id="demo"></p>
<script>
function createItem() {
    sessionStorage.test1 = "hello";
}    
function myFunction() {
    var x = sessionStorage["test1"];
    document.getElementById("demo").innerHTML = x;
}
</script>    
</body>    
</html>

=========================================================================================================

Web Workers API
The example below creates a simple web worker that count numbers in the background:


<!DOCTYPE html>
<html>
<body>
<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button> 
<button onclick="stopWorker()">Stop Worker</button>
<script>
let w;
function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}
function stopWorker() { 
  w.terminate();
  w = undefined;
}
</script>
</body>
</html>
=========================================================================================================

Full Web Worker Example Code
We have already seen the Worker code in the .js file. Below is the code for the HTML page:

<!DOCTYPE html>
<html>
<body>
<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button> 
<button onclick="stopWorker()">Stop Worker</button>
<script>
let w;
function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}
function stopWorker() { 
  w.terminate();
  w = undefined;
}
</script>
</body>
</html>

=========================================================================================================

JavaScript Fetch API
A Fetch API Example
The example below fetches a file and displays the content:

<!DOCTYPE html>
<html>
<body>
<p id="demo">Fetch a file to change this text.</p>
<script>
let file = "fetch_info.txt"
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);
</script>
</body>
</html>

=========================================================================================================

Since Fetch is based on async and await, the example above might be easier to understand like this:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
getText("fetch_info.txt");
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}
</script>
</body>
</html>

=========================================================================================================

Or even better: Use understandable names instead of x and y:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
getText("fetch_info.txt");
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("demo").innerHTML = myText;
}
</script>
</body>
</html>