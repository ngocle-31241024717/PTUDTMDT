/* Exercise 8.8 - JavaScript Functions */

// Buoc 8: bien toan cuc (global scope)
var boxClass = 'movingDiv';

// Buoc 1 -> 6: ham outputBox da duoc nang cap (tra ve chuoi, co tham so num)
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

/* Buoc 9: bo comment dong duoi (dat sau vong lap trong HTML hoac cuoi file) de xem loi
   "box is not defined" trong Console, vi box la bien cuc bo (var trong ham).
   Buoc 10: xoa chu "var" truoc "box" trong ham outputBox -> box thanh bien toan cuc,
   console.log(box) se in ra duoc.
*/
// console.log(box);
