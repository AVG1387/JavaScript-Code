24-01-2022
JQuery HTML

JavaScript / jQuery HTML Elements
Set Text Content
Set the inner text of an HTML element:

jQuery

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
</head>    
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden!</p>
<script>
$(document).ready(function(){
    var myElement = $("#01");
    myElement.text("Hello Sweden!");
});    
</script>    
</body>
</html>

=========================================================================================================
JavaScript - Setting Text Content

<!DOCTYPE html>
<html>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden</p>
<script>
const myElement = document.getElementById("01");
myElement.textContent = "Hello Sweden!";    
</script>    
</body>    
</html>

=========================================================================================================
jQuery - Get Text Content
Get the inner text of an HTML element:

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden!</p>
<p id="03">Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function() {
  var myText = $("#02").text();
  $("#demo").text(myText); 
});
</script>
</body>
</html>

=========================================================================================================
JavaScript - Get Text Content

<!DOCTYPE html>
<html>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden!</p>
<p id="03">Hello Japan!</p>
<p id="demo"></p>
<script>
const myText = document.getElementById("03").textContent;
document.getElementById("demo").innerHTML = myText;     
</script>
</body>    
</html>

=========================================================================================================
jQuery - Set HTML Content

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<div id="01"><p>Hello World!</p></div>
<div id="02"><p>Hello Sweden!</p></div>
<p id="demo"></p>
<script>
$(document).ready(function() {
$("#02").html("<p>Hello World!</p>");
});
</script>
</body>
</html>

=========================================================================================================
Javascript - Set HTML Content

<!DOCTYPE html>
<html>
<body>
<div id="01"><p>Hello World!</p></div>
<div id="02"><p>Hello Japan!</p></div>
<p id="demo"></p>
<script>
document.getElementById("01").innerHTML = "<p>Hello World!</p>";     
</script>
</body>    
</html>
=========================================================================================================

Get HTML Content
jQuery - Get the HTML content of an element:

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>    
<body>
<div id="01"><p>Hello World!</p></div>
<div id="02"><p>Hello Bangalore!</p></div>
<p id="demo"></p>
<script>
$(document).ready(function(){
var content = $("#02").html();
$("#01").html(content);
});    
</script>    
</body>
</html>
=========================================================================================================

JavaScript - Get the HTML content of an element:

<!DOCTYPE html>
<html>
<body>
<div id="01"><p>Hello World!</p></div>
<div id="02"><p>Hello Chennai!</p></div>
<script>
const content = document.getElementById("02").innerHTML;
document.getElementById("01").innerHTML = content;    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript / jQuery CSS Styles

jQuery - Hiding HTML Elements

Get Text Content

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
</head>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden!</p>
<p id="03">Hello Japan!</p>
<p id="demo"></p>
<script>
$(document).ready(function(){
    $("#02").hide();
});    
</script>
</body>    
</html>

=========================================================================================================
JavaScript - Hide HTML Elements

<!DOCTYPE html>
<html>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Japan</p>
<p id="03">Hello Sweden</p>
<script>
document.getElementById("02").style.display = "none";    
</script>
</body>    
</html>

=========================================================================================================
jQuery - Showing HTML Elements

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>    
<body>
<p id="01" style="display:none">Hello World!</p>
<p id="02" style="display:none">Hello Japan!</p>
<p id="03" style="display:none">Hello Sweden!</p>
<script>
$(document).ready(function(){
    $("#02").show();
});    
</script>
</body>
</html>

=========================================================================================================

JavaScript - Showing HTML Elements

<!DOCTYPE html>
<html>
<body>
<p id="01" style="display:none">Hello World!</p>
<p id="02" style="display:none">Hello Chennai!</p>
<p id="01" style="display:none">Hello Bangalore!</p>
<script>
document.getElementById("02").style.display = "";
</script>
</body>    
</html>

=========================================================================================================

Jquery - Styling HTML Elements
Change the font size of an HTML element:

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
</head>    
<body>
<p id="demo">Change the style of HTML element</p>
<script>
$(document).ready(function(){
    $("#demo").css("font-size", "38px");
});    
</script>
</body>
</html>
=========================================================================================================

JavaScript - Change the font size of an HTML element:

<!DOCTYPE html>
<html>
<body>
<p id="demo">Change the style of an HTML element</p>
<script>
document.getElementById("demo").style.fontSize = "55px";    
</script>    
</body>    
</html>

=========================================================================================================
JavaScript / jQuery HTML DOM
Removing HTML Elements
jQuery - Remove an HTML element:

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
</head>    
<body>
<p id="id01">Hello World!</p>
<p id="id02">Hello Chennai!</p>
<script>
$(document).ready(function(){
    $("#id01").remove();
});    
</script>
</body>
</html>

=========================================================================================================

JavaScript - Remove an HTML Element

<!DOCTYPE html>
<html>
<body>
<p id="id01">Hello Wolrd!</p>
<p id="id02">Hello Chennai!</p>
<script>
document.getElementById("id02").remove();    
</script>    
</body>    
</html>

=========================================================================================================

Get Parent Element
jQuery - Return the parent of an HTML element:

<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
</head>    
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Chennai</p>
<p id="demo"></p>
<script>
$(document).ready(function(){
    $("#demo").text($("#02").parent().prop("nodeName"));
});    
</script>    
</body>
</html>

=========================================================================================================

JavaScript - Get Parent HTML Element

<!DOCTYPE html>
<html>
<body>
<p id="01">Hello World!</p>
<p id="02">Hello Sweden!</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = document.getElementById("02").parentNode.nodeName;
</script>    
</body>    
</html>

=========================================================================================================