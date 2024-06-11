function doubleNumbers(arr){
   return arr.map(function(num){
    return num*2;
   })

}
console.log(doubleNumbers([2, 5, 100]));
;
console.log('--------------task2---------');
function stringItUp(arr){
   return arr.map(function(num){
        return num.toString();
    })
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
console.log('--------------task3---------');
function capitalizeNames(arr){
  return  arr.map(function(str){
        return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
    });
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
console.log('--------------task4---------');
function namesOnly(arr) {
    return arr.map(function(person) {
        return person.name;
    });
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
console.log('--------------task5---------');
function makeStrings(arr) {
    return arr.map(function(person) {
        if (person.age >= 18) {
            return `${person.name} can go to The Matrix`;
        } else {
            return `${person.name} is under age!!`;
        }
    });
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));  
console.log('--------------task6---------');
function readyToPutInTheDOM(arr) {
    return arr.map(function(person) {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
    });
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
console.log('--------------task7---------');
console.log(doubleNumbers([1,-2,-3]));
console.log('--------------task8---------');
function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    });
}

console.log(valTimesIndex([1, 2, 3])); 
console.log(valTimesIndex([1, -2, -3])); 
console.log('--------------task9---------');
function extractKey(arr, key) {
    return arr.map(function(obj) {
        return obj[key];
    });
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
console.log('--------------task10---------');
function extractFullName(arr) {
    return arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
}

console.log(extractFullName([
    { first: 'Elie', last: "Schoppik" },
    { first: 'Tim', last: "Garcia" },
    { first: 'Matt', last: "Lane" },
    { first: 'Colt', last: "Steele" }
]));