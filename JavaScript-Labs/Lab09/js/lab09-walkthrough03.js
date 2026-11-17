/* Exercise 9.3 - Modifying the DOM */

// Buoc 1: tao the <p>, them text va gan vao div "first"
var first = document.getElementById("first");

var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Buoc 3: xoa mot the <li>
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));
