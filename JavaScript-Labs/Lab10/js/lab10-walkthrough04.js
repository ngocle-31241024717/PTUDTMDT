/* Exercise 10.4 - jQuery Listeners */

/* Buoc 2: shortcut click()
$(".panel").click(function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Buoc 3: on("click", ...)
$(".panel").on("click", function() {
    $("#message").html("You clicked in the panel");
});
*/

/* Buoc 4: document ready
$(function () {
    $(".panel").on("click", function() {
        $("#message").html("You clicked in the panel");
    });
});
*/

// Buoc 5 (ban cuoi): gan nhieu su kien bang chaining
$(function () {
    $(".panel")
        .on("mousemove", function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave", function (e) {
            $("#message").html("goodbye!");
        })
        .on("click", function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");   // huy su kien mousemove
        });
});
