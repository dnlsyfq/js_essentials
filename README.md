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