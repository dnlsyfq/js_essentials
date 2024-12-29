//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// let arr = []
// for(let i = 0; i < contacts.length; i++){
//     arr.push(contacts[i]['firstName']);
// }

// console.log(arr.indexOf('Akira'));


function lookUpProfile(name, prop){
    let arr = []
    for(let i = 0; i < contacts.length; i++){
        arr.push(contacts[i]['firstName']);
    }
    if(arr.includes(name)){
        var obj = contacts[arr.indexOf(name)]
        return `${obj['firstName']}, ${obj[prop]}`
    } else {
        return 'None such firstname'
    }
}

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
    return "No such contact";
  }

// Change these values to test your function
var data = lookUpProfile("Akira", "likes");

console.log(data);
