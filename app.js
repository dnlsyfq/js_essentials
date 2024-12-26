// function wordBlanks(Noun,Adjective,Verb,Adverb){
//     return `The ${Adjective} ${Noun} ${Verb} to the store ${Adverb}`
// }

// console.log(wordBlanks("dog","big","ran","quickly"))

// var ourArr = ["Stimpson","J","cat"];
// ourArr.push("happy","joy");
// ourArr.push([1,"SAP"]);

// console.log(ourArr);

// var ourArray = [1,2,3];
// var removedFromOurArray = ourArray.pop(); 

// console.log(ourArray);
// console.log(removedFromOurArray);



// var myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();

// console.log(myArray);
// console.log(removedFromMyArray);

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
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