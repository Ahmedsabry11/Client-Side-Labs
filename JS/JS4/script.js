// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.

console.log(document.getElementsByTagName("div")[0].innerHTML);

// 2. Using getElementById change the text of #my-p to "Hello DOM".

document.getElementById("my-p").innerText = "Hello DOM";

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.

console.log(document.querySelector(".target-div").nodeName);


// 4. Use querySelectorAll to count how many <div> elements exist; log the count.

console.log(document.querySelectorAll("div").length);


// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".

document.getElementsByName("user-email")[0].value = "user@test.com";


// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.


if (!document.getElementById("my-input").hasAttribute("name"))
{
  document.getElementById("my-input").setAttribute("name", "user-name")
}

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).

document.getElementById("my-p").innerText += " - UPDATED";


// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.

var imgs = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"]
var isPaused = true
var current = 0;

setInterval(
  function()
  {
    if(!isPaused)
    {
      current = (current + 1)% 5;
      document.getElementById("img1").src = imgs[current];
    }
  },
 3000);

 function start()
 {
  isPaused = false;
 }

 function pause()
 {
  isPaused = true;
 }
 function left()
 {
   current = (current -1 ) %5;
   document.getElementById("img1").src = imgs[current];
 }
 function right()
 {
   current = (current + 1 ) %5;
   document.getElementById("img1").src = imgs[current];
 }

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.

  document.getElementById("my-input").placeholder = "Type your full name"


// 10. Log whether the email input has attribute "required"; if missing add it.

if(document.getElementById("my-email").hasAttribute('required'))
{
  console.log("has attribute required");
}
else{
    console.log("added attribute required");
    document.getElementById("my-email").setAttribute("required", "true");
}

// 11. Write function getSelectedValue(selectId) returning the current selected option value.


function getSelectedValue(selectId)
{
  var options = document.getElementById(selectId).options;
  if(!options)
  {
    return null;
  }
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected)
    {
      console.log(document.getElementById(selectId).options[i])
      return document.getElementById(selectId).options[i];
    }
  }
  return null;
}

getSelectedValue("my-select");
// 12. Loop through all options of the select and log each option's text and value.


function logOptions(selectId)
{
  var options = document.getElementById(selectId).options;
  if(!options)
  {
    return null;
  }
  for (let i = 0; i < options.length; i++) {

    console.log(document.getElementById(selectId).options[i].text, document.getElementById(selectId).options[i].value )

  }

}

logOptions("my-select");

// 13. Programmatically select the option with value "EG".


function selectOptions(selectId)
{
  var options = document.getElementById(selectId).options;
  if(!options)
  {
    return null;
  }
  for (let i = 0; i < options.length; i++) {
    if(document.getElementById(selectId).options[i].value === "EG")
    {
      console.log(document.getElementById(selectId).options[i].text, document.getElementById(selectId).options[i].value )
      return document.getElementById(selectId).options[i];
    }

  }

}

selectOptions("my-select");

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.


function selectByText(selectId, text)
{
  var options = document.getElementById(selectId).options;
  if(!options)
  {
    return null;
  }
  for (let i = 0; i < options.length; i++) {
    if(document.getElementById(selectId).options[i].text === text)
    {
      document.getElementById(selectId).options[i].selected = true;
      break;
    }

  }

}

selectByText("my-select", "Egypt");

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).


document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>";


// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).


document.getElementById("div-2").classList.add("class-a");
document.getElementById("div-2").classList.add("class-b");
document.getElementById("div-2").classList.remove("class-b");


// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.


document.getElementById("div-2").classList.toggle("hidden");
document.getElementById("div-2").classList.toggle("hidden");
// visiable as element will not have class hidden



// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.


function insertAfter(refNode, newNode)
{
  refNode.insertAdjacentElement("afterEnd", newNode);
}

var myDiv = document.createElement("div");
myDiv.innerText = "Hello World"

insertAfter(document.getElementById("div-2"), myDiv);


// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.

var newDiv = document.createElement("div");
newDiv.innerText = "Dynamic Box";
newDiv.style.backgroundColor = "yellow";
document.getElementById("div-2").appendChild(newDiv);


// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var newP= document.createElement("p");
newP.innerText = "paragraph";
document.getElementById("div-2").insertBefore(newP, document.getElementById("div-2").firstChild);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.

var span= document.createElement("span");
span.innerText = "AFTER END";
document.getElementById("div-2").insertAdjacentElement("afterEnd", span);

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.

document.getElementById("form1").addEventListener("submit",
  function(event)
  {
    event.preventDefault();
    console.log(document.getElementById("my-input").value);
    console.log(document.getElementById("my-email").value);
    console.log(getSelectedValue("my-select").value);
  }
)

// 23. Add input event on the text input that logs its length whenever it changes.



document.getElementById("my-input").addEventListener("change",
  function()
  {
    console.log(document.getElementById("my-input").value.length);
  }
)

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).

function validateEmailSimple(value)
{
  var found1 = false;
  var found2 = false;
  
  for (let i = 0; i < value.length; i++) {
    
    if(value[i] === '@')
    {
      found1 = true;
    }
    if(value[i] === '.')
    {
      found2 = true;
    }
  }

  return found1 && found2;
}
console.log(validateEmailSimple("ahmed@gmail.com"));
console.log(validateEmailSimple("ahmed@."));
console.log(validateEmailSimple("ahmed@gmailcom"));
console.log(validateEmailSimple("ahmedgmail.com"));

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).

var newDiv = document.createElement("div");
newDiv.innerText = "element";
document.getElementById("div-2").appendChild(newDiv);
document.getElementById("div-2").removeChild(newDiv);

// 25. Create an element, append it to 
{/* <div id="wrapper">
  <p id="first">First</p>
  <p id="second">Second</p>
</div> */}

var newDiv = document.createElement("div");
newDiv.innerText = "Thrid";
document.getElementById("wrapper").appendChild(newDiv);


// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.

var node = document.getElementById("div-2");
var clone = node.cloneNode(true);
clone.id = "div-2-clone"
// document.getElementById("div-2").insertAfter(clone);
document.getElementById("div-2").insertAdjacentElement("afterEnd",clone);


// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.

function highlightInputs(form)
{
  for (let i = 0; i < form.elements.length; i++) {
    console.log(form.elements[i]);
    if(form.elements[i].nodeName !== "INPUT")
    {
      continue;
    }
      if(form.elements[i].type === "text" || form.elements[i].type === "email")
      {
        form.elements[i].style.borderColor = "green";
      }
    
  }
}
document.addEventListener("DOMContentLoaded",
  function()
  {
    var form = document.forms[0];
    highlightInputs(form);
  }
)
// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

function buildCard(title, content) 
{
  var newDiv = document.createElement("div");
  newDiv.classList.add("card");


  var h3 = document.createElement("h3");
  h3.innerHTML = title;

  var p = document.createElement("p");
  p.innerHTML = content;
  newDiv.appendChild(h3);
  newDiv.appendChild(p);
  return newDiv;
}

document.body.appendChild(
  buildCard("Card", "card text")
)
;
// 29. Add delegated click listener on body logging when a .card is clicked.


document.body.addEventListener("click", function(e){
  if(e.target.className === "card")
  {
    console.log(e.target);
  }
});

// 30. Reflection (comment): Which two tasks were most challenging and why?

// slider and events

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
var ulList = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  var li = document.createElement("li");
  if(i %2 == 0)
  {
      li.classList.add("even");
      li.innerText = "Even";
  }
  else
  {
    li.classList.add("odd");
    li.innerText = "Odd";
  }
    
  ulList.appendChild(li);
  
}


document.body.appendChild(ulList);

// 33.
document.getElementById("input1").addEventListener("change",function(e)
{
  document.getElementById("input1-copy").innerText = document.getElementById("input1").value;
});
document.getElementById("input2").addEventListener("change",function(e)
{
  document.getElementById("input2-copy").innerText = document.getElementById("input2").value;
});
document.getElementById("input3").addEventListener("change",function(e)
{
  document.getElementById("input3-copy").innerText = document.getElementById("input3").value;
});