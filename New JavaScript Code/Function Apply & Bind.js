29-12-2022
JavaScript Function apply()

Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName; 

    }
}    
const person1 = {
    firstName: "Ananda",
    lastName: "Ganesh"
}
document.getElementById("demo").innerHTML = person.fullName.apply(person1);
</script>    
</body>    
</html>

=========================================================================================================

The Difference Between call() and apply()
The apply() Method with Arguments
The apply() method accepts arguments in an array:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}    
const person1 = {
    firstName:"Ananda",
    lastName: "Ganesh"
}
document.getElementById("demo").innerHTML = person.fullName.apply(person1,["Kengeri","India"]);
</script>    
</body>    
</html>

=========================================================================================================
Compared with the call() method:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = { 
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city +","+country; 
    }
}    
const person1 = {
    firstName: "Ananda",
    lastName: "Ganesh"
}
const person2 = {
    firstName:"Paru",
    lastName: "Mohan"
}
document.getElementById("demo").innerHTML = person.fullName.call(person2,"Kengeri", "India");
</script>    
</body>    
</html>

=========================================================================================================

Simulate a Max Method on Arrays
You can find the largest number (in a list of numbers) using the Math.max() method:

JavaScript Math.max()
This example returns the highest number in a list of number arguments:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.max(1,2,3,4,5,6,7,8,9);    
</script>    
</body>    
</html>

=========================================================================================================

Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.max.apply(null,[1,2,3,4,5,6,7,8,9]);       
</script>    
</body>    
</html>

=========================================================================================================

The first argument (null) does not matter. It is not used in this example.

These examples will give the same result:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.max.apply(Math,[4,5,8]);    
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
document.getElementById("demo").innerHTML = Math.max.apply(" ",[1,2,3]);    
</script>    
</body>    
</html>

=========================================================================================================

Example - 3

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = Math.max.apply(0,[1,2,3]);    
</script>    
</body>    
</html>

=========================================================================================================

JavaScript Function bind()
Function Borrowing

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>    
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}    
const member = {
    firstName: "Paru",
    lastName: "Ganesh"
}
let fullName = person.fullName.bind(member);
document.getElementById("demo").innerHTML = fullName();
</script>
</body>    
</html>

=========================================================================================================

Preserving this
Sometimes the bind() method has to be used to prevent loosing this.

In the following example, the person object has a display method. In the display method, this refers to the person object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "John",
    lastName: "Doe",
    display: function() {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    }
}    
person.display();
</script>    
</body>    
</html>

=========================================================================================================
Preserving this
Sometimes the bind() method has to be used to prevent loosing this.

In the following example, the person object has a display method. In the display method, this refers to the person object:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstname: "Ananda",
    lastname: "Ganesh",
    display: function() {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstname + " " + this.lastname;
    }
}    
person.display();
</script>    
</body>
</html>

=========================================================================================================

When a function is used as a callback, this is lost.

This example will try to display the person name after 3 seconds, but it will display undefined instead:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}
setTimeout(person.display, 3000);
</script>
</body>
</html>
=========================================================================================================

The bind() method solves this problem.

In the following example, the bind() method is used to bind person.display to person.

This example will display the person name after 3 seconds:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function() {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}
let display = person.display.bind(person);
setTimeout(display, 3000);
</script>
</body>
</html>

=========================================================================================================