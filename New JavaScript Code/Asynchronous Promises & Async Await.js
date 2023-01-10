10-01-2023

Asynchronous JavaScript

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}  
function myCalculator(num1, num2, myCallback){
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(1,1,myDisplayer);
</script>  
</body>  
</html>

=========================================================================================================
Waiting for a Timeout
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

setTimeout() with a Callback

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
setTimeout(myFunction, 3000);
function myFunction() {
  document.getElementById("demo").innerHTML = "I Love You !!";
}

</script>  
</body>  
</html>

=========================================================================================================

Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

setInterval() with a Callback

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
setTimeout(function(){ myFunction("I Love You !!!");}, 3000);
function myFunction(value){
  document.getElementById("demo").innerHTML = value;
}
</script>  
</body>  
</html>

=========================================================================================================

Waiting for Intervals:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
setInterval(myFunction,5000);
function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}  
</script>  
</body>  
</html>


=========================================================================================================

JavaScript Promise Object

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}  
let myPromise = new Promise(function(myResolve,myReject){
  let x = 0;
  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script>  
</body>  
</html>

=========================================================================================================
JavaScript Promise Examples
setInterval() with a Callback
Waiting for a Timeout
Waiting for a File

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
setTimeout(function() {myFunction("I Love You !!!");},3000);
function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
</script>  
</body>  
</html>

=========================================================================================================

Example Using Promise

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
const myPromise = new Promise(function(myResolve, myReject){
  setTimeout(function(){myResolve("I Love You !!!");},3000);
});
myPromise.then(function(value){
  document.getElementById("demo").innerHTML = value;
});
</script>  
</body>  
</html>

=========================================================================================================

Waiting for a file (Output result is showing Error: 404 so i need to check with sridhar regarding this.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some){
  document.getElementById("demo").innerHTML = some;
}  
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    }else {
      myCallback("Error: " + req.status);
    }
  }
  req.open('GET', "mycar.html");
  req.send();
}
getFile(myDisplayer);
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
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
</script>
</body>
</html>

=========================================================================================================

JavaScript Async/Await

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}  
async function myFunction() {return "Anand";}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);},
);
</script>  
</html>
</body>  

=========================================================================================================

Example - 2

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}  
async function myFunction() {return "Ananda";}
myFunction().then(
  function(value) {myDisplayer(value);}
);
</script>  
</body>  
</html>

=========================================================================================================

Await Syntax

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject){
    resolve("I Love You!!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}  
myDisplay();
</script>  
</body>  
</html>

=========================================================================================================

Example - 2

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
</script>
</body>
</html>

=========================================================================================================

Waiting for a Timeout

<!DOCTYPE html>
<html>
<body>
<h1 id="demo"></h1>
<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
myDisplay();
</script>
</body>
</html>

=========================================================================================================
Waiting for a File

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
getFile();
</script>
</body>
</html>


=========================================================================================================