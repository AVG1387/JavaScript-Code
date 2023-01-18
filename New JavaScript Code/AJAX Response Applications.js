18-01-2023
Server Response Methods
The getAllResponseHeaders() Method
The getAllResponseHeaders() method returns all header information from the server response.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
}  
xhttp.open("GET","ajax_info.txt");
xhttp.send();
</script>
</body>
</html>

=========================================================================================================

The getResponseHeader() Method
The getResponseHeader() method returns specific header information from the server response.

<!DOCTYPE html>
<html>
<body>
<p>Last modified: <span id="demo"></span></p>
<script>
const xhttp=new XMLHttpRequest();
xhttp.onload = function() {
  document.getElementById("demo").innerHTML =
  this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
</script>
</body>
</html>

=========================================================================================================
AJAX XML Example (Need tyo understand and work hard on this)

<!DOCTYPE html>
<html>
<style>
table,th,td {
  border : 1px solid black;
  border-collapse: collapse;
}
th,td {
  padding: 5px;
}
</style>
<body>
<button type="button" onclick="loadDoc()">Get my CD collection</button>
<br><br>
<table id="demo"></table>
<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    myFunction(this);
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
</script>
</body>
</html>


=========================================================================================================

AJAX PHP Example

<!DOCTYPE html>
<html>
<body>
<p>Suggestions: <span id="txtHint"></span></p> 
<p>First name: <input type="text" id="txt1" onkeyup="showHint(this.value)"></p>
<script>
function showHint(str) {
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "gethint.php?q="+str);
  xhttp.send();   
}
</script>
</body>
</html>

=========================================================================================================
AJAX ASP Example

<!DOCTYPE html>
<html>
<body>
<p>Suggestions: <span id="txtHint"></span></p>
<p>First name: <input type="text" id="txt1" onkeyup="showHint(this.value)"</p>
<script>
function showHint(str) {
  if (str.length == 0) {
    document.getElementById("demo").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET","gethint.asp?q="+str);
  xhttp.send();
}  
</script>
</body>  
</html>
=========================================================================================================

AJAX Database Example

<!DOCTYPE html>
<html>
<style>
th,td {
  padding: 5px;
}  
</style>  
<body>
<form action="">
<select name="customers" onchange="showCustomer(this.value)">
<option value="">Select a customer:</option>
<option value="PARU">Paru Mohan</option>
<option value="GANA">Ananda Ganesh</option>
<option value="GOWRI">Gowri Kalpana</option>
</select>  
</form> 
<br>
<div id="txtHint">Customer info will be listed below here....</div>
<script>
function showCustomer(str) {
  if (str == "") {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET","getcustomer.php?q="+str);
  xhttp.send();
}  
</script> 
</body>
</html>

=========================================================================================================
XML Applications
Display XML Data in an HTML Table (need to work more on this model)

<!DOCTYPE html>
<html>
<style>
table,th,td {
  border : 1px solid black;
  border-collapse: collapse;
}
th,td {
  padding: 5px;
}
</style>
<body>

<button type="button" onclick="loadXMLDoc()">Get my CD collection</button>
<br><br>
<table id="demo"></table>

<script>
function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const xmlDoc = xhttp.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");
    myFunction(cd)
  }
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}

function myFunction(cd) {
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) { 
    table += "<tr><td>" +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
</script>

</body>
</html>

=========================================================================================================