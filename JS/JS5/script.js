// 1. Predict (in comments) the output order of this code, then run to verify.

console.log(a());
var b = function () {
  return "B";
};
function a() {
  return "A";
}
console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.

// A B , a is function statements so it's hoisted and declared , while b is function expression so must be declared first to use it as value of var b else var b is hoisted with undefined value

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).

let sumFun = function (a, b) {
  return a + b;
};
function sum(a, b) {
  return a + b;
}
console.log("sum using function expression = ", sumFun(3, 4));
console.log("sum using function statement = ", sum(3, 4));
console.log("same result = ", sum(3, 4) === sumFun(3, 4));

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.

var factorial = function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log("Factorial 5 = ", factorial(5));

try {
  console.log("internal name not global", fact(5));
} catch (err) {
  console.log("throw exception");
  console.log(err);
}
// throw exception not defined

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.

function showInfo() {
  console.log("length args = ", arguments.length);
  console.log("args = ", arguments);
}

showInfo();
showInfo(1, 2);
showInfo(1, 2, 3, 4, 5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.

function mutate(x, y) {
  console.log(`args[0] ${arguments[0]}, args[1] ${arguments[1]} `);
  console.log(`x ${x}, y ${y} `);

  let temp = x;
  x = y;
  y = temp;

  console.log(`x ${x}, y ${y} `);
  console.log(`args[0] ${arguments[0]}, args[1] ${arguments[1]} `);

  arguments[0] += 10;
  arguments[1] += 10;
  console.log(`x ${x}, y ${y} `);
  console.log(`args[0] ${arguments[0]}, args[1] ${arguments[1]} `);
}

mutate(5, 10);

// args reference same parameters of function so changing x will change arguments[0] and vice versa , only in not strict mode

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().

let sumAll = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(sumAll(2, 5, 3));

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.

try {
  sumAll = function () {
    return arguments.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  };

  console.log(sumAll(2, 5, 3));
} catch (err) {
  console.log(err);
}

sumAll = function () {
  const arr = Array.from(arguments); // or [...arguments]
  return arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

console.log(sumAll(2, 5, 3));

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

function describeValue() {
  if (arguments.length === 0) {
    return "none";
  } else if (arguments.length === 1) {
    return "one:" + arguments[0];
  } else if (arguments.length === 2) {
    return "two:" + arguments[0] + "," + arguments[1];
  } else {
    return "too many";
  }
}

console.log(describeValue());
console.log(describeValue("ahmed"));
console.log(describeValue("ahmed", "sabry"));
console.log(describeValue("ahmed", "sabry", "abdelrady"));

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
let arrFuns = [
  (n) => {
    return n * 2; // 10*2 = 20
  },
  (n) => {
    return n + 1; // 20+1 = 21
  },
  (n) => {
    return n / 3; // 21 / 3 = 7
  },
];

let start = 10;
for (let i = 0; i < arrFuns.length; i++) {
  start = arrFuns[i](start);
}
console.log("result = ", start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.

function makeMultiplier(factor) {
  return function (n) {
    return factor * n;
  };
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log(`double 7 = ${double(7)}`);
console.log(`triple 7 = ${triple(7)}`);

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.

// function once(fn) {
//   let done = false;
//   return function (val) {
//     if (done === false) {
//       done = true;
//       return fn(val);
//     }
//   };
// }
// let fn = once((val) => {
//   console.log(`value ${val} will be printed one time`);
//   return val;
// });
// console.log("once: ", fn(5));
// console.log("once: ", fn(6));
// console.log("once: ", fn(7));

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.

function once(fn) {
  let done = false;
  let memo = 0;
  return function (val) {
    if (done === false) {
      done = true;
      memo = fn(val);
    }
    return memo;
  };
}
let fn = once((val) => {
  console.log(`value ${val} will be printed every time`);
  return val;
});
console.log("once: ", fn(5)); // log 5
console.log("once: ", fn(6)); // log 5
console.log("once: ", fn(7)); // log 5

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.

function makeCounter(start) {
  let state = start;

  return {
    inc: () => {
      state += 1;
    },
    dec: () => {
      state -= 1;
    },
    value: () => {
      console.log(state);
      return state;
    },
  };
}

let aCounter = makeCounter(1);
let bCounter = makeCounter(1);
aCounter.inc();
bCounter.dec();

console.log(`a = ${aCounter.value()}, b = ${bCounter.value()}`);

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.

function makeAdder(start) {
  let state = start;

  return function (val) {
    state += val;
    return state;
  };
}

let makeAdd = makeAdder(0);
console.log(makeAdd(1)); // log 1
console.log(makeAdd(2)); // log 3
console.log(makeAdd(3)); // log 6

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).

function memoize1(fn) {
  // create cache dict
  let cache = {};

  return function (val) {
    if (cache.hasOwnProperty(val)) {
      return cache[val];
    }
    let result = fn(val);
    cache[val] = result;
    return result;
  };
}

let squareFn = memoize1((val) => {
  let result = val * val;
  for (let i = 0; i < 1e9; i++) {} // custom wait arround 2 seconds
  return result;
});
console.log("slow = ", squareFn(9));

console.log("fast =  ", squareFn(9));

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).

function memoizeN(fn) {
  let cache = {};
  return function () {
    let arr = Array.from(arguments);
    let key = arr.join("|");

    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    let result = fn.apply(this, arguments);
    cache[key] = result;
    return result;
  };
}
function add3(a, b, c) {
  console.log("add3:", a, b, c);
  return a + b + c;
}

const memoAdd3 = memoizeN(add3);

console.log(memoAdd3(1, 2, 3));
console.log(memoAdd3(1, 2, 3));
console.log(memoAdd3(2, 3, 4));
console.log(memoAdd3(2, 3, 4));

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.

let user = {
  name: "Ahmed",
  sayHi: function () {
    console.log(`Hi: ${this.name}`);
  },
};
user.sayHi();

var f = user.sayHi;

f();

// this is binded to object user so can get name attribute from user
// this is binded to window so no name var in it so print nothing

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.

let user2 = {
  name: "Sara",
};

user.sayHi.call(user2);
user.sayHi.apply(user2);

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

let greeter = {
  greet: function (greeting, sign) {
    console.log(greeting + " " + this.name + sign);
  },
};

let user3 = {
  name: "Ali",
};

greeter.greet.apply(user3, ["Hello", "!"]);
// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.

let user4 = {
  name: "Lara",
};

let greetLara = greeter.greet.bind(user4);
greetLara("Hello", "!");
greetLara("Hi", "!");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).

function sayHello(obj) {
  return greeter.greet.bind(obj, "Hello");
}

sayHello({ name: "Ali" })("!");
sayHello({ name: "Lara" })("*");
sayHello({ name: "Omar" })("!!");

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

function cpy() {
  let arr = Array.prototype.slice.call(arguments);
  console.log("reversed: ", arr.slice().reverse());
  console.log("args: ", arguments);
  console.log("original: ", arr);
}

cpy(1, 2, 3, 4, 5);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.

let arr = [5, 2, 11, 7];

console.log(Math.max.apply(null, arr));

let max = arr[0];
for (let i = 2; i < arr.length; i++) {
  max = Math.max(max, arr[i]);
}
console.log(max);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

console.log(Math.max.call(null, 1, 3, 100, 10));

// apply takes array as input or array-like so better deal with numbers , unlike explicity enter each value manally

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

let name = "ahmed";
let age = 24;
console.log("User: " + name + " Age: " + (age + 1));
console.log(`User: ${name} Age: ${age + 1}`);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

let title = "Ahmed";
let body = "\thi";
console.log(`Title: ${name} \nbody ${body}`);

console.log(`Title: ${name} 
        body ${body}`);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.

{
  var i = true;
  let j = true;
  console.log("i = ", i);
  console.log("j = ", j);
}

console.log("i = ", i); // visiable

try {
  console.log("j = ", j); // not visiable, throw error not defined
} catch (err) {
  console.log(err);
}

// 28. Write code that tries to log x before let x = 5;.

try {
  console.log(x); // Cannot access 'x' before initialization
} catch (err) {
  console.log(err);
}

let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

try {
  const arr = [1, 2, 3];
  arr.push(4);
  console.log("updated const array", arr);
  arr = [1]; // throw error
} catch (err) {
  console.log(err);
}

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

let square1 = (n) => {
  return n * n;
};
let square2 = (n) => n * n;
let square3 = (n) => n * n;

console.log(
  `square1 = ${square1(2)}, square2 = ${square1(2)}, square3 = ${square1(2)}`
);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

let timer = {
  count: 0,
  startClassic: function () {
    let id = setInterval(
      function () {
        console.log("classic count = ", this.count);
        this.count += 1;

        if (this.count > 5) {
          clearInterval(id);
        }
      }.bind(this),
      1000
    );
  },

  startArrow: function () {
    let id = setInterval(() => {
      console.log("arrow count = ", this.count);
      this.count += 1;

      if (this.count > 5) {
        clearInterval(id);
      }
    }, 1000);
  },
};

timer.startClassic();

timer.startArrow();

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

let arrowFn1 = () => {
  return { v: 10 };
};

console.log(arrowFn1());
try {
  let arrowFn2 = () => {
    v: 10;
  };
  console.log(arrowFn2()); // will deal with paraentheses of object as it's parentheses so will not return anything
} catch (error) {
  console.log(error);
}
// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).

let user6 = {
  name: "Ahmed",
  sayHi: () => {
    console.log("Hi " + this.name);
  },
};

user.sayHi(); // Hi

// bind to global scope

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).

function greet(name) {
  return "Hi " + name + "!";
}

const greetArrow = (name) => {
  return "Hi " + name + "!";
};

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).

const add2 = (x) => x + 2;
const times3 = (x) => x * 3;
const minus1 = (x) => x - 1;

function runPipeline(n, fnsArray) {
  let result = n;
  for (let fn of fnsArray) {
    result = fn(result);
  }
  return result;
}

console.log(runPipeline(5, [add2, times3, minus1])); // 20

// 36. (write answers BEFORE running):
var obj = {
  n: 1,
  inc: function () {
    this.n++;
    return this.n;
  },
};
var inc = obj.inc;
console.log(obj.inc()); // 2
console.log(inc()); // NaN
//    Explain both lines.

// one inc is binded to object so can see this.n
// var inc is binded to global scope so this.n is undefined + 1 is NaN

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.

let counterArr = [];
for (let i = 0; i < 1000; i++) {
  counterArr.push(makeCounter(0));
}

// large closure arrays has idendpent memory so size will be 1000* size(counter), if 1M will cause browers to memory crash

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.

function safeFirst() {
  if (arguments.length === 0) {
    return undefined;
  }
  return Array.from(arguments);
}

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

function factory (namesArray)
{
  let counters = {};

  for (let i = 0; i < namesArray.length; i++) {
    let count = 0;
    counters[namesArray[i]] = () => {
      count++;
      return count;
    };
  }
  return counters;
}

var counters = factory(['a','b']);

console.log(counters.a()); 
console.log(counters.a()); 
console.log(counters.b()); 
console.log(counters.b()); 
// 40. Write 2 things that were new or tricky today (comment).
// 1- bind and apply and call, 2- arrow function this scope
