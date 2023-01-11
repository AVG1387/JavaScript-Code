11-01-2023

JS HTML DOM


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p id="intro">Finding HTML Elements by Id</p>
<p>This example demonstrates the <b>getElementsById</b> method.</p>

<p id="demo"></p>

<script>
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

</script>

</body>
</html>

=========================================================================================================
Finding HTML Elements by Tag Name
This example finds all <p> elements:


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
  const element = document.getElementsByTagName("p");
  document.getElementById("demo").innerHTML = "The text in first paragragh (index 0) is: " + element[0].innerHTML;
</script>  
</body>  
</html>
=========================================================================================================

This example finds the element with id="main", and then finds all <p> elements inside "main":

<!DOCTYPE html>
<html>
<body>
<div id="main"></div>
<p id="demo"></p>
<script>
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("demo").innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
</script>
</body>
</html>

=========================================================================================================
Finding HTML Elements by Class Name
If you want to find all HTML elements with the same class name, use getElementsByClassName().
This example returns a list of all elements with class="intro".

<!DOCTYPE html>
<html>
<body>
<p class="intro">Hello World!</p>
<p id="demo"></p>
<script>
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
</script>
</body>
</html>

=========================================================================================================

Finding HTML Elements by CSS Selectors

<!DOCTYPE html>
<html>
<body>
<p class="intro">Hello World!.</p>
<p id="demo"></p>
<script>
const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
</script>
</body>
</html>

=========================================================================================================

Finding HTML Elements by HTML Object Collections


<!DOCTYPE html>
<html>
<body>
<form id="frm1" action="/action_page.php">
First name: <input type="text" name="fname" value="Donald"><br>
Last name: <input type="text" name="lname" value="Duck"><br><br>
<input type="submit" value="Submit">
</form> 
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

=========================================================================================================
Finding HTML Elements Using document.anchors

<!DOCTYPE html>
<html>
<body>
<a name="html">HTML Tutorial</a><br>
<a name="css">CSS Tutorial</a><br>
<a name="xml">XML Tutorial</a><br>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Number of anchors are: "  + document.anchors.length;
</script>
</body>  
</html>

=========================================================================================================

document.documentElement

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

document.body

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
JavaScript Window - The Browser Object Model

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
"Browser inner window width: " + window.innerWidth + "px<br>" + 
"Browser inner window height: " + window.innerHeight + "px";
</script>  
</body>  
</html>

=========================================================================================================

JavaScript Window Screen

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Screen width is" + screen.width;  
</script>  
</body>  
</html>

=========================================================================================================

Window Screen Height

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Screen height is "  + screen.height;  
</script>  
</body>  
</html>


=========================================================================================================

Window Screen Available Width

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Available screen width is " + screen.availWidth;  
</script>  
</body>  
</html>

=========================================================================================================

Window Screen Available Height

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Available screen height is " + screen.availHeight;  
</script>  
</body>  
</html>

=========================================================================================================

Window Screen Color Depth

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Screen color depth is " + screen.colorDepth;  
</script>  
</body>  
</html>

=========================================================================================================
Window Screen Color Depth

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"Screen Color Depth: " + screen.colorDepth;
</script>  
</body>  
</html>

=========================================================================================================

Window Screen Pixel Depth

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = "Screen pixel depth is " + screen.pixelDepth;
</script>
</body>
</html>

=========================================================================================================