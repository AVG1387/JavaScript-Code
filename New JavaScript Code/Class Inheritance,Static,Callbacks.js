09-01-2023

Class Inheritance

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}    
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ',it is a ' + this.model;
    }
}
let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
</script>    
</body>    
</html>

=========================================================================================================

Getters and Setters
Classes also allows you to use getters and setters.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
}    
let myCar = new Car("BMW");
document.getElementById("demo").innerHTML = myCar.cnam;
</script>    
</body>    
</html>

=========================================================================================================

Example
You can use the underscore character to separate the getter/setter from the actual property:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}    
    let myCar = new Car("BMW");
    document.getElementById("demo").innerHTML = myCar.carname;
</script>    
</body>    
</html>

=========================================================================================================
Use a setter to change the carname to "Volvo":

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    set carname(x) {
        this._carname = x;
    }
    get carname() {
        return this._carname;
    }
}    
let myCar = new Car("BMW");
myCar.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar.carname;
</script>    
</body>    
</html>

=========================================================================================================

Class Static Methods

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(name){
        this.name = name;
    }
    static hello() {
        return "Hello!";
    }
    
}    
let myCar = new Car("BMW");
document.getElementById("demo").innerHTML = Car.hello();
</script>    
</body>    
</html>

=========================================================================================================

If you want to use the myCar object inside the static method, you can send it as a parameter:

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello(x) {
        return "Hello " + x.name;
    }
}    
let myCar = new Car("Audi");
document.getElementById("demo").innerHTML = Car.hello(myCar);
</script>    
</body>    
</html>

=========================================================================================================

JS Async
Function Sequence
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
This example will end up displaying "Goodbye":

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}    
function myFirst(){
    myDisplayer("hello");
}
function mySecond() {
    myDisplayer("Goodbye");
}
myFirst();
mySecond();
</script>    
</body>    
</html>

=========================================================================================================

This example will end up displaying "Hello":

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}    
function myFirst() {
    myDisplayer("Hello");
}
function mySecond() {
    myDisplayer("Goodbye");
}
mySecond();
myFirst();
</script>    
</body>    
</html>

=========================================================================================================

Sequence Control
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}    
function myCalculation(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculation(8,40);
myDisplayer(result);
</script>    
</body>    
</html>

=========================================================================================================
Function Sequence
JavaScript functions are executed in the sequence they are called.

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(some) 
{
    document.getElementById("demo").innerHTML = some;
}    
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
myCalculator(7,3);
</script>    
</body>    
</html>

=========================================================================================================
JavaScript Callbacks
Callback Functions

<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
}    
function myCalculator(num1,num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(17,93, myDisplayer);
</script>    
</body>    
</html>

=========================================================================================================

In the example above, myDisplayer is a called a callback function.

It is passed to myCalculator() as an argument.

In the example above, (x) => x >= 0 is a callback function.

It is passed to removeNeg() as an argument.

<!DOCTYPE html>
<html>
<body style="text-align: right">
<p id="demo"></p>
<script>
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
document.getElementById("demo").innerHTML = posNumbers;
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
</script>
</body>
</html>