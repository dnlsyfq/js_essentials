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

