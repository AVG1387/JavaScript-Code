For Date upates :

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const d = new Date("October 13, 2022 11:14:00");
document.getElementById("demo").innerHTML = d;    
</script>    
</body>    
</html>

----------------------------------------------
Using new Date(7 numbers), creates a new date object with the specified date and time:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const d = new Date(2022, 25,45,78,98,36,15,95,75,0);
document.getElementById("demo").innerHTML = d;    
</script>    
</body>    
</html>
----------------------------------------------------------
JavaScript counts months from 0 to 11.

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
    const d = new Date(2022,98,78,45,65,12,32,58,91,37);
    document.getElementById("demo").innerHTML = d;
    </script>
    </body>
    </html>
