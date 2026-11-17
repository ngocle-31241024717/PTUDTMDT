/* Exercise 10.6 - Simple jQuery Animation */

$(function () {
    // Buoc 2: hien dan anh trong 1000 ms
    $("#btnFadeIn").click(function () {
        $("figure").fadeIn(1000);
    });
    // Buoc 3: mo dan anh trong 1000 ms
    $("#btnFadeOut").click(function () {
        $("figure").fadeOut(1000);
    });
    // Buoc 4: dao trang thai hien/an
    $("#btnFade").click(function () {
        $("figure").fadeToggle(500);
    });
    // Buoc 5: hieu ung truot
    $("#btnSlideDown").click(function () {
        $("figure").slideDown("slow");
    });
    $("#btnSlideUp").click(function () {
        $("figure").slideUp("slow");
    });
    $("#btnSlide").click(function () {
        $("figure").slideToggle(2000);
    });
});
