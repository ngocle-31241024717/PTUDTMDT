/* Exercise 10.7 - More jQuery Animation (popup xem truoc anh) */

$(function () {

    $('figure img').on('mouseover', function (e) {

        // tao ten file anh lon tu anh nho
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        // tao phan tu dong chua anh lon va chu thich
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');
        preview.append(image);
        preview.append(caption);
        $('body').append(preview);

        // lam anh nho thanh mau xam
        $(this).addClass("gray");

        // hien dan khung xem truoc
        $("#preview").fadeIn(1000);
    });

    // Buoc 3: ham go bo va ham di chuyen khung xem truoc
    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    function movePreview(e) {
        // dat vi tri theo toa do chuot
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    // Buoc 4: gan su kien
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
