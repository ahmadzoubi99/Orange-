// Correct the syntax error
// task1 
let arr=[ 1,7 , 9 , 45, ]

let arr2=["Str" ,"alex","moh"];

let arr3=['the','fox','lazy','over' , 'dog' ];
// -----------------
// task2
// What the index of "Banana","Tomato"
console.log('---------------task2---------------')
var fruits=["Tomato","Banana","Watermelon"]
console.log("Index of Banana:", fruits.indexOf('Banana')); 
console.log("Index of Tomato:", fruits.indexOf('Tomato')); 


console.log('---------------task3---------------')
var favorites = [
    ["Pizza", "mansaf", "Burgers", "Ice Cream"],
    
    ["footbal", "Soccer", "Tennis"],
    
    ["breaking bad", "Inception", "The Dark Knight", "Forrest Gump"]
];

console.log(favorites);

console.log('---------------task4---------------')
function firstOfArray(arr) {
    if (arr.length > 0) {
        return arr[0]; 
    } else {
        return undefined; }
}

console.log(firstOfArray([1, 4, 5])); //  1
console.log(firstOfArray(["t", "u", "g", "x"])); 


console.log('---------------task5---------------')
function lastOfArray(arr) {
    if (arr.length > 0) {
        return arr[arr.length-1]; 
    } else {
        return undefined; }
}
console.log(lastOfArray([1,4,5]));
console.log(lastOfArray(["t","u","g","x"]))
console.log('---------------task6---------------')
var array = [0, 5, 7, 9];
// => [1,3,4,6,8,9,10]

array.shift();
array.shift();
array.shift();
console.log(array);
array.unshift(1, 3, 4);
console.log(array);
array.push(6, 8,9, 10);
console.log(array); 
console.log('---------------task7---------------')
var array2 = [5, 9, -7, 3.5];
console.log(array2);
var pushReturnValue = array2.push(10);
console.log("Push Return Value:", pushReturnValue); // Output: 5 (new length of the array)
console.log(array2);
var unshiftReturnValue = array2.unshift(2);
console.log("Unshift Return Value:", unshiftReturnValue); // Output: 6 (new length of the array)
console.log(array2);
var shiftReturnValue = array2.shift();
console.log("Shift Return Value:", shiftReturnValue); // Output: 2 (removed element)
console.log(array2);
var popReturnValue = array2.pop();
console.log("Pop Return Value:", popReturnValue); // Output: 10 (removed element)
console.log(array2); // Output: [9, -7, 3.5, 10] 
console.log('---------------task8---------------')
function middleOfArray(arr) {
    var length = arr.length;
    if (length % 2 === 1) {
        var middleIndex = Math.floor(length / 2);
        return arr[middleIndex];
    } else {
        var middleIndex1 = length / 2 - 1;
        var middleIndex2 = length / 2;
        return arr[middleIndex1] + " and " + arr[middleIndex2];
    }
}

console.log(middleOfArray([1, 4, 5])); // Output: 4
console.log(middleOfArray(["t", "u", "g", "x"])); // Output: "u and g"
console.log('---------------task9---------------')
var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals.splice(1);
console.log(animals);

var nums9 = [1, 2, 3, 8, 9];
nums9[0] = 5;
nums9[1] = -22;
nums9[2] = 3.5;
nums9.push(44, 98, 44);
console.log(nums9);

console.log('---------------task10---------------')
function indexOfArray(arr, index) {
    return arr[index];
}

var num10 = [1, 2, 3, 8, 9];
console.log(indexOfArray(num10, 3)); // Output: 8
console.log(indexOfArray(num10, 1)); // Output: 2
console.log(indexOfArray(num10, 4)); // Output: 9
console.log('---------------task11---------------')
function arrayExceptLast(arr) {
    return arr.slice(0, -1);
}

var nums11 = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums11)); // Output: [1, 2, 3, 8]

console.log('---------------task12---------------')

function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}

var nums12 = [1, 2, 3, 8, 9];
console.log(addToEnd(nums12, 55)); //  [1, 2, 3, 8, 9, 55]
console.log('---------------task13---------------')
function sumArrayForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function sumArrayWhileLoop(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum;
  }
    let nums13 = [1, 2, 3, 8, 9];
  console.log(sumArrayForLoop(nums13)); // 23
  console.log(sumArrayWhileLoop(nums13));  23
  
console.log('---------------task14---------------')
function minInArrayForLoop(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function minInArrayWhileLoop(arr) {
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] < min) {
        min = arr[i];
      }
      i++;
    }
    return min;
  }
    let nums14 = [1, 2, 3, 8, 9];
  console.log(minInArrayForLoop(nums14)); // Output: 1
console.log('---------------task15---------------')
  // Using a for loop
function removeFromArrayForLoop(arr, elementToRemove) {
    let newArray1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== elementToRemove) {
        newArray1.push(arr[i]);
      }
    }
    return newArray1;
  }
  
//   Using a while loop
  function removeFromArrayWhileLoop(arr, elementToRemove) {
    let newArray = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== elementToRemove) {
        newArray.push(arr[i]);
      }
      i++;
    }
    return newArray;
  }
  
  // Test cases
  let nums15 = [1, 2, 3, 8, 9];
  console.log(removeFromArrayForLoop(nums15, 8)); // [1, 2, 3, 9]
  console.log(removeFromArrayWhileLoop(nums15, 8)); // [1, 2, 3, 9]

console.log('---------------task16---------------')
  
  // Using a for loop
function oddArrayForLoop(arr) {
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddArray.push(arr[i]);
      }
    }
    return oddArray;
  }
  
  // Using a while loop
  function oddArrayWhileLoop(arr) {
    let oddArray = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 !== 0) {
        oddArray.push(arr[i]);
      }
      i++;
    }
    return oddArray;
  }
  
  // Test cases
  let nums16 = [1, 2, 3, 8, 9];
  console.log(oddArrayForLoop(nums16)); // [1, 3, 9]
  console.log(oddArrayWhileLoop(nums16)); //  [1, 3, 9]
console.log('---------------task17---------------')
// Using a for loop
function aveArrayForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  // Using a while loop
  function aveArrayWhileLoop(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum / arr.length;
  }
  
  // Test cases
  let num17 = [1, 2, 3, 8, 9];
  console.log(aveArrayForLoop(num17)); //  4.6
  console.log(aveArrayWhileLoop(num17)); // 4.6
  
  let nums17 = [1, 2, 3, 8, 9, 77];
  console.log(aveArrayForLoop(nums17)); //  16.6
  console.log(aveArrayWhileLoop(nums17)); //  16.6
console.log('---------------task18---------------')
  // Using a for loop
function shorterInArrayForLoop(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }
    return shortest;
  }
  
  // Using a while loop
  function shorterInArrayWhileLoop(arr) {
    let shortest = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
      i++;
    }
    return shortest;
  }
  
  // Test case
  let strings18 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(shorterInArrayForLoop(strings18)); // "alex"
  console.log(shorterInArrayWhileLoop(strings18)); // "alex"
console.log('---------------task19---------------')
  // Using a for loop
function repeatCharForLoop(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  // Using a while loop
  function repeatCharWhileLoop(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
      if (str[i] === char) {
        count++;
      }
      i++;
    }
    return count;
  }
  
  // Test cases
  let string19 = "alex mercer madrasa rashed2 emad hala";
  console.log(repeatCharForLoop(string19, "a")); //  6
  console.log(repeatCharWhileLoop(string19, "a")); //  6
  
  console.log(repeatCharForLoop(string19, "z")); // 0
  console.log(repeatCharWhileLoop(string19, "z")); // 0

console.log('---------------task20---------------')
  
  // Using a for loop
function evenIndexOddLengthForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Using a while loop
  function evenIndexOddLengthWhileLoop(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i].length % 2 !== 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
  // Test case
  let strings20 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLengthForLoop(strings20)); //  ["madrasa"]
  console.log(evenIndexOddLengthWhileLoop(strings20)); //  ["madrasa"]
console.log('---------------task21---------------')
  // Using a for loop
function powerElementIndexForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i));
    }
    return result;
  }
  
  // Using a while loop
  function powerElementIndexWhileLoop(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      result.push(Math.pow(arr[i], i));
      i++;
    }
    return result;
  }
  
  let nums21 = [44, 5, 4, 3, 2, 10];
  console.log(powerElementIndexForLoop(nums21)); // [0, 5, 16, 27, 16, 100000]
  console.log(powerElementIndexWhileLoop(nums21)); //  [0, 5, 16, 27, 16, 100000]

console.log('---------------task22---------------')
  
  // Using a for loop
function evenNumberEvenIndexForLoop(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Using a while loop
  function evenNumberEvenIndexWhileLoop(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      if (i % 2 === 0 && arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
  // Test case
  let nums22 = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
  console.log(evenNumberEvenIndexForLoop(nums22)); // Output: [2, 8, 34]
  console.log(evenNumberEvenIndexWhileLoop(nums22)); // Output: [2, 8, 34]
