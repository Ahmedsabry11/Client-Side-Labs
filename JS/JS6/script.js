function Employee(name, position, office, age, startDate)
{
    this.name = name;
    this.position = position;
    this.office = office;
    this.age = age;
    this.startDate = startDate;
}

let employees = [
    new Employee("Airi Satou", "Accountant", "Tokyo", 33, "2008/11/28"),
    new Employee("Angelica Ramos", "Chief Executive Officer (CEO)", "London", 47, "2009/10/09"),
    new Employee("Ashton Cox", "Junior Technical Author", "San Francisco", 66, "2009/01/12"),
    new Employee("Bradley Greer", "Software Engineer", "London", 41, "2012/10/13"),
    new Employee("Brenden Wagner", "Software Engineer", "San Francisco", 28, "2011/06/07"),
    new Employee("Brielle Williamson", "Integration Specialist", "New York", 61, "2012/12/02"),
    new Employee("Bruno Nash", "Software Engineer", "London", 38, "2011/05/03"),
    new Employee("Caesar Vance", "Pre-Sales Support", "New York", 21, "2011/12/12"),
    new Employee("Cara Stevens", "Sales Assistant", "New York", 46, "2011/12/06"),
    new Employee("Cedric Kelly", "Senior Javascript Developer", "Edinburgh", 22, "2012/03/29")
];


let selectedAttribute = "name";
let sortAsc = true;

function createTable()
{
    let tableBody = document.getElementById("data");
    tableBody.innerHTML = ""
    for (let i = 0; i < employees.length; i++) {
        tableBody.innerHTML += `<tr>
          <td>${employees[i].name}</td>
          <td>${employees[i].position}</td>
          <td>${employees[i].office}</td>
          <td>${employees[i].age}</td>
          <td>${employees[i].startDate}</td>
        </tr>` 
    }
}
createTable();

function changeArrow(key, isUP)
{
    let array =["name","position","office","age","startDate"]
    for (let i = 0; i < array.length; i++) {
        if(key === array[i])
        {
            let index = i+1;
            if(isUP === true)
            {
                document.getElementById("arrow"+index).innerHTML = "↑"
            }
            else
            {
                document.getElementById("arrow"+index).innerHTML = "↓"
            }

        }
        else{
            let index = i+1;

            document.getElementById("arrow"+index).innerHTML = "⇅"
        }
        
    }
}
function sort(key)
{

    if(key === "name")
    {
        if (selectedAttribute === "name" && sortAsc === true)
        {
            console.log("sort descending");
            sortAsc = false;
        }
        else{
            selectedAttribute = "name";
            sortAsc = true;
        }

        employees.sort((a,b)=>{
            if(sortAsc === true)
            {
                return a.name.localeCompare(b.name);
            }
            return  b.name.localeCompare(a.name);;
        })

    }
    else if (key ==="position")
    {
        if (selectedAttribute === "position" && sortAsc === true)
        {
            sortAsc = false;
        }
        else{
            selectedAttribute = "position";
            sortAsc = true;
        }
        employees.sort((a,b)=>{
            if(sortAsc === true)
            {
                return a.position.localeCompare(b.position);
            }
            return  b.position.localeCompare(a.position);;
        })
    }
    else if (key ==="Office")
    {
        if (selectedAttribute === "Office" && sortAsc === true)
        {
            sortAsc = false;
        }
        else{
            selectedAttribute = "Office";
            sortAsc = true;
        }
        employees.sort((a,b)=>{
            if(sortAsc === true)
            {
                return a.Office.localeCompare(b.Office);
            }
            return  b.Office.localeCompare(a.Office);
        })
    }
    else if (key ==="age")
    {
        if (selectedAttribute === "age" && sortAsc === true)
        {
            sortAsc = false;
        }
        else{
            selectedAttribute = "age";
            sortAsc = true;
        }
        employees.sort((a,b)=>{
            if(sortAsc === true)
            {
                return a.age - b.age;
            }
            return  b.age - a.age;
        })
    }
    else
    {
        if (selectedAttribute === "startDate" && sortAsc === true)
        {
            sortAsc = false;
        }
        else{
            selectedAttribute = "startDate";
            sortAsc = true;
        }
        employees.sort((a,b)=>{
            if(sortAsc === true)
            {
                return new Date(a.startDate) - new Date(b.startDate)
                
            }
            return  new Date(b.startDate) - new Date(a.startDate);
        })
    }
    changeArrow(key, sortAsc);
    createTable()
}


// stack

function Node(val, prev)
{
    this.val = val;
    this.prev = prev;
}
function Stack()
{
    this.stack = null;
    this.count = 0;
}
Stack.prototype.push = function (ele)
{
    if(this.stack === null)
    {
        this.stack  = new Node(ele, null);

    }
    else{
        this.stack = new Node(ele,this.stack);
    }
    this.count+=1
    return this.count;
}

Stack.prototype.peek = function() 
{
    return this.stack.val;
}

Stack.prototype.pop =function ()
{
    if (this.count === 0)
    {
        console.log("Empty")
        return null
    }
    this.count -= 1;
    this.stack = this.stack.prev;
}

Stack.prototype.size = function ()
{
    return this.count;
}

Stack.prototype.print = function ()
{
    let node = this.stack;
    console.log(node);
    for (let i = this.count-1; i>=0; i--) {
        console.log(`i ${i}, val ${node.val}`);
        node = node.prev;
    }
}


let mystack = new Stack();

mystack.push(1);
mystack.push(10);
mystack.print();
mystack.pop();


Stack.prototype.render = function ()
{
    let node = this.stack;
    document.getElementById("stack").innerHTML = ""
    for (let i = this.count-1; i>=0; i--) {
        document.getElementById("stack").innerHTML += `<div id ='stackele'> ${node.val} </div>`
        node = node.prev;
    }
}

mystack.push(15);
mystack.push(20);
mystack.render();


///////////////////////////


function Parent(name) {
    this.name = name;
}

Parent.prototype.sayHi = function() {
    console.log("Name" + this.name);
};


function Child(name, age) {
    Parent.call(this, name); 
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

let child = new Child("ahmed" , 5);
child.sayHi();