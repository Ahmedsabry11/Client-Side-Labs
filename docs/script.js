// Doubly Linked List classes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  remove(value) {
    let current = this.head;
    while (current) {
      if (current.value == value) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;
        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
        return;
      }
      current = current.next;
    }
  }
  popLeft() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return value;
  }
  popRight() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return value;
  }
  convertToArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const list = new DoublyLinkedList();

function renderList() {
  const container = document.getElementById("list");
  container.innerHTML = "";
  list.convertToArray().forEach((val) => {
    const div = document.createElement("div");
    div.className = "node";
    div.style.backgroundColor = generateRandomColor();
    div.innerText = val;
    container.appendChild(div);
  });
}

function appendNode() {
  const val = document.getElementById("inputValue").value;
  if (val) list.append(val);
  renderList();
}
function prependNode() {
  const val = document.getElementById("inputValue").value;
  if (val) list.prepend(val);
  renderList();
}
function removeNode() {
  const val = document.getElementById("inputValue").value;
  if (val) list.remove(val);
  renderList();
}

function popLeftNode() {
    list.popLeft();
    renderList();
}

function popRightNode() {
    list.popRight();
    renderList();
}