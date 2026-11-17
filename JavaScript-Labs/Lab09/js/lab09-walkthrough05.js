/* Exercise 9.5 - Responding to Load Events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Buoc 2-3 (gay loi): script chay truoc khi DOM load xong nen divToGet = null
   var divToGet = document.getElementById("div1");
   alert(divToGet.innerHTML);
*/

// Buoc 4: chay sau khi trang load xong
window.addEventListener("load", function () {
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});
