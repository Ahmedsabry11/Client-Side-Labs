
function convertStrToNum(str)
{
    if (isNaN(str) == false && str.trim() !== "")
    {
        return true;
    }
    return false
}

console.log(convertStrToNum("123")) // return true
console.log(convertStrToNum("123.5")) // return true
console.log(convertStrToNum("1a")) // return false
console.log(convertStrToNum("")) // return false

var i = 1;
while( i < 21)
{
    console.log(i)
    i += 1;
}

var sum = 0;

while(true)
{
    var x = prompt("enter number to add to sum");
    if( x == 0)
    {
        break;
    }
    console.log("user enterd number = ", x);
    sum += Number(x);
}
console.log("sum = ", sum)


function numToDay(x)
{
    switch(x){
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");   
            break;     
        case 7:
            console.log("saterday");
            break;
        default:
            console.log("Enter number from 1 to 7");              
    
    }

}
while(true)
{
    var x = Number(prompt("enter number from one to seven only"));
    if (x>=1 && x <=7)
    {
        numToDay(x);
        break;
    }

}

var arr = [0, 1, 2, 3, 4, 5, 6 ,7,8];

for (var index = 0; index < arr.length; index++) {
    console.log("number = ", arr[index]);
    numToDay(arr[index]);
}