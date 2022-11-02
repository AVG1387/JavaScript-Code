to get Math PI Value.


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.PI;    
</script>    
</body>    
</html>

==========================================================================================================

to get the values for PI, Square Root, Log


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 
"<p><b>Math.E:</b> " + Math.E + "</p>" +
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
</script>
</body>
</html>

==========================================================================================================

to get nearest integer (first number)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.round(3.5);    
</script>    
</body>    
</html>

==========================================================================================================

to get nearest integer (last number)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById
("demo").innerHTML = Math.round(6.7);    
</script>    
</body>    
</html>

==========================================================================================================

to get nearest integer (if numbers are same)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.round(2.2);    
</script>    
</body>    
</html>