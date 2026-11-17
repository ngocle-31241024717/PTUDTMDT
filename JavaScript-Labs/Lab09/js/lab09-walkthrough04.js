/* Exercise 9.4 - Simple Event Handling */

var btn = document.getElementById("testButton");

// Buoc 6 (ban cuoi): nut Hide/Show voi CSS transition + setTimeout
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // doi display sau 1000 ms
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // doi class sau 500 ms
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

// Buoc 2: gan su kien click cho nut
btn.addEventListener("click", simpleHandler);

// Buoc 3: di chuot vao anh -> doi sang xam
var img = document.getElementById("mainImage");
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Buoc 4: roi chuot khoi anh -> tra lai binh thuong
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});

/* Lich su cac buoc (de tham khao khi chup anh):
   - Buoc 2: simpleHandler chi alert("button was clicked");
   - Buoc 5: simpleHandler an/hien doan van bang style.display
   - Buoc 6: dung ban hien tai o tren */
