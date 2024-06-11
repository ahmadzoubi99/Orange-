function doubleValues(arr){
    let doubleArray=[];
    arr.forEach(function(value) {
        doubleArray.push(value*2);
    });
    return doubleArray;
}
console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));
console.log('----------task2----------------');
// ------------task2-------------
function onlyEvenValues(arr){
    let onlyEvenArr=[];
    arr.forEach(function(value){
        if(value%2==0)
        onlyEvenArr.push(value);
    })
    return onlyEvenArr;
}
   console.log(onlyEvenValues([1,2,3]));
    console.log(onlyEvenValues([5,1,2,3,10]) );

console.log(onlyEvenValues([1,2,3,4,5,6,7,8,9,10]));
console.log('----------task3----------------');

function showFirstAndLast(arr){
   let showFirstAndLastArr=[];
   arr.forEach(function(str){
    if(str.length>1){
        showFirstAndLastArr.push(str[0]+str[str.length-1]);
    }else{
        showFirstAndLastArr.push(str[0]+str[str.length-1]);
    }
   })
   return showFirstAndLastArr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])); 
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']) );
console.log('----------task4----------------');

function addKeyAndValue(arr,key,value){
    let arr1=[];
    arr.forEach(function(obj){
        obj[key]="ahmad";
    });
    return arr;
}
console.log(addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 
    'title', 
    'instructor'
));
console.log('----------task5----------------');
function vowelCount(str) {
    let vowels = 'aeiou';
    let result = {};

    let lowerStr = str.toLowerCase();
    lowerStr.split('').forEach(function(char) {
        if (vowels.includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    });

    return result;
}

console.log(vowelCount('Elie')); // {e: 2, i: 1}
console.log(vowelCount('Tim')); // {i: 1}
console.log(vowelCount('Matt')); // {a: 1}
console.log(vowelCount('hmmm')); // {}
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}
