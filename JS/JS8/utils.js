// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.

export function greetUser(name) {
    return `Hello ${name}!`
}

export default class DataFetcher {
    constructor(){

    }
    async getUser(id)
    {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let data = await response.json()
            return data;
        } catch (error) {
            console.log(error);
        }
        return null;
    }
}