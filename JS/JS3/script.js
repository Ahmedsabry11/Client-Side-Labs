
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.

// newWindow = window.open("mat.html", "width=500, height=500");

// setTimeout(function(){
//     newWindow.close();
// }, 3000);

// 2. Display the browser's user agent string in an alert.

// alert(window.navigator.userAgent)

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
console.log(navigator.onLine)

// 4. Write code to reload the current page after 5 seconds.

// setInterval(function()
// {
//     window.location.reload();
// }, 5000)

// 5. Get the current page URL, protocol, and hostname using `location` and log them.

console.log(location.href)
console.log(location.protocol)
console.log(location.hostname)

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).

// history.back()
// history.forward()


// 7. Show the screen width and height in a div -change the div content- on the page.

// document.getElementById("screen").innerHTML = "Screen Height: " + screen.height+ " , Screen Width: " + screen.width;

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var link = setTimeout(
    function()
    {
        document.getElementById("link").href = "https://facebook.com";
        document.getElementById("link").innerText = "new link"
    },
    2000
);

function cancel()
{
    clearTimeout(link);
}

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

var titleId = setInterval(
    function()
    {
        document.childNodes[1].childNodes[0].children[2].innerText = new Date();
    }
    ,1000
);

function canelTime()
{
    clearInterval(titleId);
}
// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

result = confirm("Do you want to continue?")

if (result)
{
    console.log("user said yes");

}
else
{
    console.log("user said no");
}
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.

console.log(document.getElementsByTagName("ul")[0].childNodes)
console.log(document.getElementsByTagName("ul")[0].children)

// childNodes print all nodes in html including comments and spaces which appear as text
// chlidren print only elements nodes inside parent and remove unimportant information

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.

function printNames ()
{
    // console.log(document.body.children);
    for (let i = 0; i < document.body.children.length; i++) {
        console.log(document.body.children[i].localName)
    }
}
printNames();

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).

console.log("----------------------------------------------------")
function printElements (parent)
{
    // console.log(document.body.childNodes);
    for (let i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].nodeType !== 8 && parent.childNodes[i].nodeType !== 3)
        {
            console.log(parent.childNodes[i].localName);
        }
    }
}

printElements(document.body);

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
console.log(document.getElementById("con").firstChild);
console.log(document.getElementById("con").firstElementChild);

// firstChild will print any nodes including comments and spaces "text" nodes 
// firstElementChild print elements node only


// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.

console.log(document.getElementsByTagName("ul")[0].childNodes)
console.log(document.getElementsByTagName("ul")[0].children)

// childNodes print all nodes in html including comments and spaces which appear as text
// chlidren print only elements nodes inside parent and remove unimportant information

// 17. Write a function that logs all sibling elements of a given element (excluding itself).


function printSiblings(ele)
{
    console.log("my siblings ---------------------------------");
    var copyEle = ele;
    while(ele.nextSibling)
    {
        // if(ele.nextSibling.nodeType !== 3 && ele.nextSibling.nodeType !== 8)
        // {
        //     console.log(ele.nextSibling);
        // }
        console.log(ele.nextSibling);
        ele = ele.nextSibling;
    }
    
    while(copyEle.previousSibling)
    {
        // if(copyEle.nextSibling.nodeType !== 3 && copyEle.nextSibling.nodeType !== 8)
        // {
        //     console.log(ele.nextSibling);
        // }
        console.log(copyEle.previousSibling);
        copyEle = copyEle.previousSibling;
    }
    console.log("end siblings-----------------------");
}

printSiblings(document.getElementsByTagName("ul")[0]);
// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.

var firstChild = document.getElementsByTagName("ul")[0].firstElementChild;
while(firstChild)
{
    console.log(firstChild);
    firstChild = firstChild.nextElementSibling;
}

var firstChild = document.getElementsByTagName("ul")[0].firstChild;
while(firstChild)
{
    console.log(firstChild);
    firstChild = firstChild.nextSibling;
}

// 19. Count how many element children a given node has (not using `children.length`).

var firstChild = document.getElementsByTagName("ul")[0].firstElementChild;
var count = 0;
while(firstChild)
{
    count++;
    firstChild = firstChild.nextElementSibling;
}

console.log("count = ", count);

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.

function logForm(formEle)
{
    const elements = formEle.elements;

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.name) { 
        console.log(`${element.name}: ${element.value}`);
      }
    }
}

logForm(document.forms[0]);

// 21. Access all forms in the document using `document.forms` and log their names.

for (let i = 0; i < document.forms.length; i++) {
    console.log(document.forms[i].name)
}

// 22. Access all images in the document using `document.images` and log their `src` attributes.


for (let i = 0; i < document.images.length; i++) {
    console.log(document.images[i].src)
}


// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.


function disableForm(formEle)
{
    const elements = formEle.elements;
    
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.name) { 
        element.disabled = true;
        // element.disableForm = true;
      }
    }
}
disableForm(document.forms[0]);

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.

images = Array.from(document.images);

console.log(images)
images = images.filter(
    function(img)
    {
        return img.width > 100;
    }
)
console.log(images);
