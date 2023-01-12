12-01-2023
JS Location
JavaScript Window Location
Window Location Href
The window.location.href property returns the URL of the current page.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "The full URL of this page is:<br>" + window.location.href;    
</script>    
</body>    
</html>

=========================================================================================================
Window Location Hostname

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Page hostname is: " + window.location.hostname;    
</script>    
</body>
</html>
=========================================================================================================
and also we can write like this way too to know the host name:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = window.location.hostname;    
</script>    
</body>
</html>
=========================================================================================================

Window Location Pathname

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Page path is " + window.location.pathname;    
</script>    
</body>    
</html>

=========================================================================================================

Window Location Protocol

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "The page protocol is  " + window.location.protocol;   
</script>    
</body>    
</html>

=========================================================================================================

Window Location Port

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "The URL Port number of the current page is " + window.location.port;    
</script>    
</body>    
</html>

=========================================================================================================

Window Location Assign

<!DOCTYPE html>
<html>
<body>
<input type="button" value="Load new document" onclick="newDoc()">
<script>
function newDoc() {
    window.location.assign("http://www.ibm.com")
}    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Window History

<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>
<input type="button" value="Back" onclick="goBack()">
</body>
</html>

=========================================================================================================
Window History Forward

<!DOCTYPE html>
<head>
<script>
function goForaward() {
    window.history.forward()
}    

</script>    
</head>
<body>
    <input type="button" value="Forward" onclick="goForward()">
</body>
</html>

=========================================================================================================

JavaScript Window Navigator

Window Navigator

Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "navigator.cookieEnabled is " + navigator.cookieEnabled;    
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
document.getElementById("demo").innerHTML = 
"cookieEnabled is " + navigator.cookieEnabled;    
</script>    
</body>    
</html>

=========================================================================================================

Browser Application Name
The appName property returns the application name of the browser:


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Navigator.appName is " + navigator.appName;
</script>    
</body>    
</html>

=========================================================================================================
Browser Application Code Name

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;    
</script>    
</body>    
</html>

=========================================================================================================

The Browser Engine

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "navigator.product is " + navigator.product;    
</script>    
</body>    
</html>

=========================================================================================================
The Browser Version

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = "navigator.appVersion is " + navigator.appVersion;    
</script>  
</body>    
</html>

or

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = navigator.appVersion;    
</script>  
</body>    
</html>
=========================================================================================================

The Browser Agent

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = navigator.userAgent;    
</script>  
</body>    
</html>

=========================================================================================================

The Browser Platform

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = "navigator.platform is " + navigator.platform;    
</script>  
</body>    
</html>

or

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = navigator.platform;    
</script>  
</body>    
</html>

=========================================================================================================

The Browser Language

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = "navigator.language is " + navigator.language;    
</script>  
</body>    
</html>

or

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = navigator.language;    
</script>  
</body>    
</html>

=========================================================================================================

Is The Browser Online?

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = "navigator.onLine is " + navigator.onLine;    
</script>  
</body>    
</html>

or

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>  
<script>
document.getElementById("demo").innerHTML = navigator.onLine;    
</script>  
</body>    
</html>

=========================================================================================================

Is Java Enabled?

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "javaEnabled is " + navigator.javaEnabled();
</script>
</body>
</html>

or

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = navigator.javaEnabled();
</script>
</body>
</html>


=========================================================================================================

JavaScript Popup Boxes or Alert

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Try it</button>
<script>
function myFunction(){
    alert("I am an alert box");
}    
</script>    
</body>    
</html>

=========================================================================================================
Confirm Box

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction() {
var txt;
if (confirm("Press a button!")) {
txt = "You pressed OK!";
} else {
txt = "You pressed Cancel!";
}
document.getElementById("demo").innerHTML = txt;
}
</script>
</body>
</html>

=========================================================================================================
Prompt Box

<!DOCTYPE html>
<html>
<body>
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>
<script>
function myFunction(){
    let text;

    let person = prompt("Please enter your name:", "Ananda Ganesh");
    if (person == null || person == "") {
        text = "User cancelled the prompt";
    }else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
}    
</script>    
</body>    
</html>

=========================================================================================================

Line Breaks

<!DOCTYPE html>
<html>
<body>
<button onclick="alert('How\nHow are you?')">Try it</button>    
</body>    
</html>

=========================================================================================================