```
console.log("%cHello, World", "color: blue; font-size: 40px");
```

# JS Introduction
```
<body>
  <p id="demo"></p>
  <script>
    document.getElementById("demo").innerHTML  = "Okay";
  </script>
</body>
```

# JS EVENT 

* onclick
```
<button onclick=""></button>
```
* onsubmit
```
<form id="form" name="myForm" onsubmit="return(<JS Function>);">
  <input type="text" name="firstName" placeholder="Insert Your Name">
  <button type="submit" name="submit"> Submit </button>
</form>
```

```
JS Function = () => {
  if(document.myForm.firstName === ""){
    alert('')
    return false
  }
  
  return true
}
```



### Array

##.push()
add array , add element to array 
```

var ourArr = ["Stimpson","J","cat"];
ourArr.push("happy","joy");
ourArr.push([1,"SAP"]);

console.log(ourArr);
```

##.pop()
remove last element/array , save the removed element/array into new var
```
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```

##.shift()
remove first element/array, save the first removed element/array into new var 

```
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
```

##.unshift()
add element/array to be the first in the array 

```
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);
```

## global scope 

```
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5; // no var so it become global
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
```

### global and local same name
local take precedent
```
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit()); //sweater
console.log(outerWear); // tshirt 
```

### print array
```
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift(); 
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log("After: " + testArr);
```



```
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return name[1]
  } else if (strokes == par - 1) {
    return name[2]
  } else if (strokes == par) {
    return name[3]
  } else if (strokes == par + 1) {
    return name[4]
  } else if (strokes == par + 2) {
    return name[5]
  } else if (strokes >= par + 3) {
    return name[6]
  }
}

// Change these values to test
console.log(golfScore(5, 4));

```

```
Strokes	     Return
1	          "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
```


* copy object
```
JSON.parse(JSON.stringify(<obj>));
```

* while
condition 

