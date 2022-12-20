JavaScript Sets

The new Set() Method
Pass an Array to the new Set() constructor:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a", "b", "c", "d", "e"]);
document.getElementById("demo").innerHTML = letters.size;  
</script>  
</body>  
</html>

=========================================================================================================

Create a Set and add literal values:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
document.getElementById("demo").innerHTML = letters.size;
</script>  
</body>  
</html>

=========================================================================================================

Create a Set and add variables:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set();
const a = "a";
const b = "b";
const c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
document.getElementById("demo").innerHTML = letters.size;
</script>  
</body>  
</html>

=========================================================================================================

The add() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a", "b", "c"]);
letters.add("d");
letters.add("e");
document.getElementById("demo").innerHTML = letters.size;
</script>  
</body>  
</html>

=========================================================================================================
If you add equal elements, only the first will be saved:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
document.getElementById("demo").innerHTML = letters.size;
</script>
</body>
</html>

=========================================================================================================

The forEach() Method

The forEach() method invokes a function for each Set element:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a","b","c"]);
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================

The values() Method

The values() method returns an Iterator object containing all the values in a Set:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
  const letters = new Set(["a","b","c","d","e"]);
  document.getElementById("demo").innerHTML = letters.values();
</script>  
</body>  
</html>

=========================================================================================================
Now you can use the Iterator object to access the elements:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a","b","c","d","e"]);
let text = "";
for (const x of letters.values()) {
  text += x + "<br>"; 
}  
document.getElementById("demo").innerHTML = text;
</script>  
</body>  
</html>
=========================================================================================================

The keys() Method

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<Script>
const letters = new Set(["a", "b", "c", "d", "e", "f", "g"]);
document.getElementById("demo").innerHTML = letters.keys();
</Script>  
</body>  
</html>

=========================================================================================================
The entries() Method
A Set has no keys.
entries() returns [value,value] pairs instead of [key,value] pairs.
This makes Sets compatible with Maps:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a","b","c"]);
const iterator = letters.entries();
let text = "";
for (const entry of iterator) {
  text += entry + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>

=========================================================================================================

Sets are Objects

For a Set, typeof returns object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a","b","c"]);
document.getElementById("demo").innerHTML = typeof letters;  
</script>  
</body>  
</html>

=========================================================================================================
For a Set, instanceof Set returns true:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const letters = new Set(["a","b","c"]);
document.getElementById("demo").innerHTML = letters instanceof Set;  
</script>  
</body>  
</html>

=========================================================================================================