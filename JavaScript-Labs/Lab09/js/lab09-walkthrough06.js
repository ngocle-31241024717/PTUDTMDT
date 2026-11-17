/* Exercise 9.6 - Debugging Events */

// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

// Buoc 7: gan su kien mouseover cho tung div, hien id cua div bi tro vao
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".movingDiv");
    for (i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            // Buoc 9: dat breakpoint o dong alert ben duoi de xem bien e, e.target
            alert("triggered by " + e.target.id);
        });
    }
});
