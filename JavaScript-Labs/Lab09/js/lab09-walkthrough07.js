/* Exercise 9.7 - Working with Forms */

// Buoc 2: doi mau nen khi focus / blur
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Buoc 3: gan listener cho cac o nhap sau khi trang load
window.addEventListener("load", function () {
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (i = 0; i < fields.length; i++) {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});
