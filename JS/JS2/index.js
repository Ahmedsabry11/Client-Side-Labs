// numbers > .toFixed(), toPrecision(), parseFloat(), parseInt() , 0.1+0.2

// strings > .length, .slice(), .substring(), .toUpperCase(), .toLowerCase(),  .trim(), .indexOf(), .lastIndexOf(), .split()

// Math > .round(), .floor(), .ceil(), .abs(), .sqrt(), .pow(), .max(), .min(), .PI, random int

// arrays > .push(), .pop(), .shift(), .unshift(), .splice(), .sort(), .reverse(), .forEach(), .map(), .slice(), .filter(), .reduce()

// Boolean

// Date >> self Study


// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.

console.log("1.----------------------------------------");
var intVar = parseInt("258.90");
console.log(intVar, typeof intVar);

var floatVar = parseFloat("258.90");
console.log(floatVar, typeof floatVar);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
console.log("2.----------------------------------------")
var num = 7.45678
num = +num.toFixed(2);
console.log(num, typeof num);


// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
console.log("3.----------------------------------------");

console.log(isNaN("abc"));
console.log(isNaN(undefined));
console.log(Number.isNaN(undefined));

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.

console.log("4.----------------------------------------");

if ( 0.1+0.2 == +0.3)
{
    console.log("correct");
}
else{
    console.log("should not go here");
}
if ( +(0.1+0.2).toFixed(1) === +(0.3).toFixed(1))
{
    console.log("correct with fixed");
}
else{
    console.log("should not go here");
}
// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.

console.log("5.----------------------------------------");

function safeParse(x)
{
    if (isNaN(parseInt(x)))
    {
        return null;
    }
    return parseInt(x);
}

console.log("120px", safeParse("120px"))
console.log("px120", safeParse("px120"))
// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).

console.log("6.----------------------------------------");

function isFiniteNumber(x)
{
    if (x == null)
    {
        return false;
    }
    if (typeof x == 'string')
    {
        return false;
    }
    if (x == Infinity)
    {
        return false;
    }
    if(isNaN(x))
    {
        return false;
    }

    return true;
}

console.log("correct examples")
console.log(1, isFiniteNumber(1));
console.log(Number.MAX_SAFE_INTEGER, isFiniteNumber(Number.MAX_SAFE_INTEGER));
console.log(1.1, isFiniteNumber(1.1));
console.log(-1, isFiniteNumber(-1));

console.log("false examples")
console.log("null", isFiniteNumber(null));
console.log("1", isFiniteNumber("1"));
console.log(NaN, isFiniteNumber(NaN));
console.log(Infinity, isFiniteNumber(Infinity));

// 7. Remove leading and trailing spaces from the string "   hello world  ".
console.log("7.----------------------------------------");

var trimmed = "   hello world  ".trim()
console.log(trimmed, "length ", trimmed.length);

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
console.log("8.----------------------------------------");

var str = "javascript";
console.log(  str.slice(4)  );
console.log(  str.substring(4)  );
// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
console.log("9.----------------------------------------");
console.log("Banana Mania".toLowerCase().split('a').length-1);
console.log("Banana Mania".match(/a/gi).length);

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
console.log("10.----------------------------------------");

function reverseString(str)
{
    var s = "";
    for (let index = str.length -1; index >=0; index--) {
        s += str[index];
    }
    return s;
}

console.log("ahmed" , reverseString("ahmed"));
function reverseString(str)
{
    return str.split("").reduce( 
        function(s, ch)
        {
            return ch+s;
        });
}
console.log("ahmed" , reverseString("ahmed"));
// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
console.log("11.----------------------------------------");

function capitalizeWords(str){
    strArr = str.toLowerCase().split(" ");

    for (let index = 0; index < strArr.length; index++) {
        strArr[index] = strArr[index][0].toUpperCase() + strArr[index].slice(1);
    }
    return strArr.join(" ");
}

console.log(capitalizeWords("Hello There Friend"));
// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
console.log("12.----------------------------------------");

var str = "https://example.com/path/to/page";
str = str.slice(str.indexOf("://")+3);
str = str.slice(0,str.indexOf("/"));

console.log(str);


// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
console.log("13.----------------------------------------");

function naiveIndexOf(haystack, needle)
{
    for (let index = 0; index < haystack.length; index++) {
        if(haystack.length - index < needle.length)
        {
            return -1;
        }
        var found = true;
        for (let index2 = 0; index2 < needle.length; index2++) {
            if (needle[index2] != haystack[index+index2])
            {
                found = false;
                break;
            }
        }
        if(found)
        {
            return index;
        }
    }

    return -1;
}
console.log(naiveIndexOf("javascript", "script"));
console.log(naiveIndexOf("javascript", "python"));

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
console.log("14.----------------------------------------");

// missing == or === and () for toUpperCase function
var s = 'hello'; if (s.toUpperCase() === 'HELLO') { console.log('match'); }

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
console.log("15.----------------------------------------");

var arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);
console.log(arr);

arr.unshift(0);
console.log(arr);

// 16. Remove the last element and store it. Remove the first element and store it.
console.log("16.----------------------------------------");
var removed1 = arr.pop()
console.log(removed1);

var removed2 = arr.shift();
console.log(removed2);

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
console.log("17.----------------------------------------");

var newArr = [10,20,30,40,50].slice(0,3);
console.log(newArr);

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
console.log("18.----------------------------------------");

var newArr = [1,2,3,4,5]
console.log(newArr.splice(2,2,'a','b'));
console.log(newArr);


// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
console.log("19.----------------------------------------");
// splice update same array but slice create new one


var newArr = [1,2,3,4,5]
console.log(newArr.slice(2,4));
console.log(newArr);
console.log(newArr.splice(2,2));
console.log(newArr);

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
console.log("20.----------------------------------------");

var arr =[]
console.log(arr, arr.length);

arr[7] = true;
console.log(arr, arr.length);

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
console.log("21.----------------------------------------");
function compact (arr)
{
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
       if (!!arr[i])
       {
        newArr.push(arr[i]);
       }
    }
    return newArr;
}

var arr = [1, true, false, NaN, "", " ", {}];
console.log(arr);
console.log(compact(arr));
// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
console.log("22.----------------------------------------");
function deepClone1D(a)
{
    var newA = new Array(a.length);

    for (let i = 0; i < a.length; i++) {
        newA[i] = a[i];
    }
    return newA;
}

var arr = [1,2,3]
var newArr = deepClone1D(arr);

newArr.push(4);
console.log("Arr = ", arr);
console.log("newArr = ", newArr);

// 23. Map [1,2,3] to their squares using map.
console.log("23.----------------------------------------");

console.log([1,2,3].map(function (item){
    return item*item;
}));
// 24. Filter [5,10,15,20] to keep values >= 12.
console.log("24.----------------------------------------");
console.log([5,10,15,20].filter(function (item){
    return item >=12;
}));

// 25. Reduce [2,4,6] to product.
console.log("21.----------------------------------------");
console.log([2,4,6].reduce(function (acc, item){
    return acc*item;
},1));

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
console.log("26.----------------------------------------");
var a = [2,4,6];
var sumReduce = a.reduce(function (acc, item){
    return acc+item;
},0);
var sumLoop = 0;
for (let i = 0; i < a.length; i++) {
    sumLoop+= a[i];
}

if (sumLoop == sumReduce)
{
    console.log("correct sum");
}
else{
    console.log("difference sum");
}


// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
console.log("27.----------------------------------------");
var arr = ['Ali','Sara','Kareem'] 

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0];
}
console.log(arr);


// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
console.log("28.----------------------------------------");

function unique(arr)
{
    var uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        var found = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (uniqueArr[j] == arr[i])
            {
                found = true;
                break;
            }
        }
        if(!found)
        {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

var arr = [1, 2, 1, 3, 3, 1]
console.log("duplicated arr", arr);
console.log("unqiue ", unique(arr));

// use hashtables (key , value) check if key exists then not add it, complexity will be O(N)


// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
console.log("29.----------------------------------------");

console.log(typeof []);
function flatten1(arr)
{
    var newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]))
        {
            for (let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j]);
                
            }
        }
        else{
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}

var arr = [1,[2,3],[4],5]
console.log(arr)
console.log(flatten1(arr));

// 31. Create object person with name and age; add a new property city after creation.
console.log("31.----------------------------------------");

var person = {"name": "ahmed", "age":25};
console.log(person);
person.city = "helwan";
console.log(person);

// 32. Access a property via bracket notation with a dynamic key variable.
console.log("32.----------------------------------------");

console.log(person["name"]);
console.log(person.age);
var name = "name";
console.log(person[name]);


// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
console.log("33.----------------------------------------");

var count = 0;
function countKeys(obj)
{
    var count = 0;
    for (var key in obj)
    {
        count++;
    }
    return count;
}
console.log ("person object keys name, city, age = ",countKeys(person));

// 39. List (as comments) 5 different values that coerce to false in ES5.
console.log("39.----------------------------------------");

// NaN
// false
// ""
// null
// undefined

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
console.log("40.----------------------------------------");

function safeToBoolean(v){
    if (v === true || v === 1 || v === '1')
    {
        return true;
    }
    return false;
}

console.log(true,safeToBoolean(true));
console.log(1, safeToBoolean(1));
console.log("1", safeToBoolean("1"));
console.log(2, safeToBoolean(2));
console.log("true", safeToBoolean("true"));
console.log(undefined, safeToBoolean(undefined));


// 41. Create a Date for Jan 1, 2025 00:00 local.
console.log("41.----------------------------------------");

var date = new Date("Jan 1, 2025 00:00");
console.log(date);

// 42. Get the current year from new Date().
console.log("42.----------------------------------------");

var date = new Date();
console.log(date.getFullYear());

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
console.log("43.----------------------------------------");

function daysBetween(d1,d2)
{

    var d1Time = d1.getTime();
    var d2Time = d2.getTime();
    return (d1Time-d2Time) / (1000*60*60*24);
    
}

console.log(daysBetween(new Date("2025-1-1"), new Date("2024-1-1")));

// 44. Generate a random integer 1..100.
console.log("44.----------------------------------------");

console.log(parseInt(Math.random()*100+1) );

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
console.log("45.----------------------------------------");

console.log("round ",Math.round(4.567));
console.log("ceil ",Math.ceil(4.567));
console.log("floor ",Math.floor(4.567));

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
console.log("46.----------------------------------------");

function randomIntArray(n,min,max)
{
    var arr = [];
    for (let i = 0; i < n; i++) {
        var num = parseInt(Math.random()*(max-min+1)+min)
        arr.push(num);
    }
    return arr;
}

console.log(randomIntArray(20, 1, 5));

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
console.log("56.----------------------------------------");
function parsePriceList(str)
{
    var obj = {};
    var arr = str.split(";");
    for (let i = 0; i < arr.length; i++) {
        substr = arr[i]
        subArr = substr.split(":");
        obj[subArr[0]] = subArr[1]; 
    }
    return obj
}

console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
console.log("57.----------------------------------------");

function filterAndSortNumbers(mixedArray)
{
    var numArr = mixedArray.filter(
        function(item)
        {
            return Number.isFinite(item);
        });
    numArr.sort();
    return numArr
}

arr = [1, 5,2, NaN," ", "" , undefined, 0 ];
console.log(arr);
console.log(filterAndSortNumbers(arr));