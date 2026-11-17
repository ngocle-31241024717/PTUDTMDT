/* Exercise 9.1 - Basic DOM Selection */

// Buoc 2: chon textarea va gan value
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Buoc 3: doi tieu de bang bien tam
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Buoc 4: viet gon, khong dung bien tam
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Buoc 5: innerHTML tra ve ca the HTML ben trong
msg.value = document.getElementById("first").innerHTML;

// Buoc 6: innerText chi tra ve chu, bo the HTML
msg.value = document.getElementById("first").innerText;

// Buoc 7: doc thuoc tinh class
msg.value = "My class is " + msg.getAttribute("class");

// Buoc 8: chon theo ten the
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Buoc 9: chon tat ca <span>, dua noi dung vao textarea
elem = document.getElementsByTagName("span");
for (i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

// Buoc 10: chon theo class
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

// Buoc 11: querySelector - phan tu dau tien khop
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

// Buoc 12: querySelectorAll - tat ca phan tu khop
ps = document.querySelectorAll("#first p");
for (i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

// Buoc 13: an textarea (class "hidden")
document.getElementById("msgArea").setAttribute("class", "hidden");

// Buoc 14: doi mau nen div features
document.getElementById("features").style.backgroundColor = "green";
