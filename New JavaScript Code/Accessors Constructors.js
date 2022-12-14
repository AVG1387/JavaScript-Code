14-12-2022

JavaScript Object Accessors

This example uses a lang property to get the value of the language property:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "en",
    get lang() {
        return this.language;
    }
};
document.getElementById("demo").innerHTML = person.lang;    
</script>    
</body>    
</html>


=========================================================================================================

JavaScript Setter (The set Keyword)
This example uses a lang property to set the value of the language property.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "en",
    set lang(value) {
        this.language = value;
    }
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.language;
</script>    
</body>    
</html>

=========================================================================================================


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "NO",
    set lang(value) {
        this.language = value;
    }
};    
person.lang = "ka";
document.getElementById("demo").innerHTML = person.language;
</script>    
</body>    
</html>

=========================================================================================================

14-12-2022

JavaScript Function or Getter?

What is the differences between these two examples?

Example 1

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
};
document.getElementById("demo").innerHTML = person.fullName();
</script>    
</body>    
</html>

=========================================================================================================

Example 2

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName;    
</script>    
</body>    
</html>

=========================================================================================================

Data Quality
JavaScript can secure better data quality when using getters and setters.
Using the lang property, in this example, returns the value of the language property in upper case:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};
document.getElementById("demo").innerHTML = person.lang;    
</script>    
</body>    
</html>
=========================================================================================================

Using the lang property, in this example, stores an upper case value in the language property:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const person = {
    firstName: "Ananda",
    lastName: "Ganesh",
    language: "en",
    set lang(lang) {
this.language = lang.toUpperCase();
    }
};
person.lang = "en";
document.getElementById("demo").innerHTML = person.language;    
</script>    
</body>    
</html>

=========================================================================================================

Object.defineProperty()

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
const obj = {counter : 0};
Object.defineProperty(obj, "reset", {
get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
set : function (value) {this.counter -= value;}
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;
</script>
</body>
</html>

=========================================================================================================

JavaScript Object Constructors

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

}
const myFather = new Person("Vedamurthy", "M V", 73, "blue");
document.getElementById("demo").innerHTML = "My father is " + myFather.age + ".";
</script>    
</body>    
</html>

=========================================================================================================

Object Types (Blueprints) (Classes)

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("Vedamurthy", "MV", 73, "blue");
const myMother = new Person("Parvathi", "MV", 72, "red");
document.getElementById("demo").innerHTML = "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
</script>    
</body>    
</html>

=========================================================================================================

Adding a Property to an Object


<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname= last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("Vedamurthy", "MV", 73, "green");
const myMother = new Person("Paru", "V", 72, "blue");
myFather.nationality = "Indian";
document.getElementById("demo").innerHTML = "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;
</script>    
</body>    
</html>

=========================================================================================================
