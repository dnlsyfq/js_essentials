// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// console.log(typeof collectionCopy);
// console.log(typeof collection);

function updateRecords(id,prop,value){
    if(prop==='tracks'){
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value

    }
    return collection 
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468,"tracks","test"));

let arr = [[1,2],[3,4],[5,6,7]];


let total = 1;
for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr[i].length; j++){
        total *= arr[i][j];
    }
}

console.log(total);