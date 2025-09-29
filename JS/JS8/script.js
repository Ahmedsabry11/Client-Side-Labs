// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
import DataFetcher ,{ greetUser } from "./utils.js";

console.log(greetUser("Ahmed"));

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
let x = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed!")
    }, 2000);
})

x.then((result)=>{
    console.log(result);
});

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".

async function waitAndGreet() {
    return  new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("Welcome!")
        }, 1000);
    })
}

let welcomeMessage = await waitAndGreet();
console.log(welcomeMessage)

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json()
    console.log(data);
    console.log(`name: ${data.name}, email: ${data.email}`)
} catch (error) {
    console.log(error);
}

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.

async function getPosts()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        return data.slice(0,3).map((post)=>{
            return post.title;
        })
    } catch (error) {
        console.log(error);
    }
}

let titles = await getPosts();
console.log(titles);
// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.

let timer = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(2), 1000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(3), 1000);
    });
  })
  .then((result) => {
    console.log(result);
  })

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.


function parseJSON(data)
{
    try {
        console.log(JSON.parse(data))
    } catch (error) {
        console.log(error);
    }
}

parseJSON('{"name": "Omar"}' );

parseJSON('{name: Omar}' );

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.

async function getCompletedCount()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
        let data = await response.json();
        let dataJSON = JSON.stringify(data);
        console.log(`json \n ${dataJSON}`);
        return data.reduce((acc, obj)=>{
            return acc + obj.completed
        },0)
    } catch (error) {
        console.log(error);
    }
}

let count = await getCompletedCount();
console.log(count);

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.

let dataFetcher = new DataFetcher();

let user = await dataFetcher.getUser(1)
console.log(`user with id = 1`);
console.log(user);
