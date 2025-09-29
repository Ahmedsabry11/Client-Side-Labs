// 1- Write a function that greets a user, using a default parameter for the name.

console.log("1.----------------------------------------------------------------");
function greets (name = "Ahmed")
{
    console.log(`Hi ${name}`);
}

greets("Ahmed Sabry");
greets();

// 2- Write a function that calculates the total price with a default tax rate parameter.

console.log("2.----------------------------------------------------------------");
function total(price, tax = 0.12) {
    return price * tax + price;
}

console.log(`total price with 20% tax ${total(100, 0.2)}`);

console.log(`total price with default tax ${total(100)}`);

// 3- Write a function that creates a user object, using a default role parameter.


console.log("3.----------------------------------------------------------------");
function User (name, role = "user"){
    this.name = name;
    this.role = role;
}

let user1 = new User("ahmed");

let user2 = new User("sabry", "admin");

console.log(user1);
console.log(user2);


// 4- Write a function that multiplies any number of arguments using the rest operator.

console.log("4.----------------------------------------------------------------");
function multiplies(...arr)
{
    return arr.reduce((acc, num) => {
        return acc*num;
    }, 1);
}

console.log(multiplies(1,2,3,4));
console.log(multiplies(1,2,3,4,5));


// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.


console.log("5.----------------------------------------------------------------");
function sumMultply(a, ...arr)
{
    return a* arr.reduce((acc, num) => {
        return acc+num;
    }, 0);
}
console.log(multiplies(2,1,2,3)); 
console.log(multiplies(0,2,3,4,5));

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.

console.log("6.----------------------------------------------------------------");
function concat (...strArr)
{
    return strArr;
}

console.log(concat("ahmed", "sabry"));

// 7- Create a new array by combining two arrays using the spread operator.

console.log("7.----------------------------------------------------------------");
let arr1 = [1,2,3]

let arr2 = [4,5,6]
let arr3 = [...arr1, ...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 8- Copy an array using the spread operator.

console.log("8.----------------------------------------------------------------");
let arr4 =  [...arr1];
console.log(arr4);

// 9- Merge two objects into one using the spread operator.

console.log("9.----------------------------------------------------------------");
let o1 = {
    name: "ahmed"
}
let o2 = {
    age: 24
}
let o3 = {
    ...o1, ...o2
};

console.log(o3);

// 10- Update a property in an object using the spread operator to create a new object.

console.log("10.----------------------------------------------------------------");
let o4 = {
    ...o3, name: "sabry"
};
console.log(o4);

// 11- Destructure an array to get the first and second elements into variables.

console.log("11.----------------------------------------------------------------");
let [first, second] = [...arr1]
console.log(first, second);

// 12- Destructure an array to get the first element and the rest into another array.


console.log("12.----------------------------------------------------------------");
let [ first_ele, ...arr6] = [...arr1]
console.log(first_ele);
console.log(arr6);


// 13- Destructure an object to extract two properties into variables.

console.log("13.----------------------------------------------------------------");
let {
    name,
    age
} = {...o3}

console.log(name, age);

// 14- Destructure an object and rename the extracted properties.

console.log("14.----------------------------------------------------------------");
let {
    name: firstName,
    age: Age
} = {...o3}

console.log(firstName, Age);

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.

console.log("15.----------------------------------------------------------------");
function Destructure(obj, ...arrPara){

    for(let Para of arrPara) {
        const {[Para] : data} = obj 
        console.log(data);

    }
}
Destructure(o3, "name");
