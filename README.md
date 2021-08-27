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

