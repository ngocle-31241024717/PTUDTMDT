/* Exercise 10.9 - GET Requests */

// Dich vu goc cua sach (co the da ngung hoat dong hoac khong ho tro https):
var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
// Neu dich vu goc khong tra ve du lieu, bo comment dong duoi de dung du lieu mau cuc bo
// (nho ghi chu viec nay trong file Word):
// var url = "data/cities.json";

$(function () {
    $("#consume").click(function () {

        /* Buoc 3: ban dau tien (comment lai khi lam buoc 5)
        $.get(url, function (data, status) {
            var list = "";
            // duyet du lieu JSON, them ten tung thanh pho vao list
            for (var i = 0; i < data.length; i++) {
                list += data[i].name + "<br>";
            }
            $("#results").html(list);
        });
        */

        // Buoc 4 + 5 (ban cuoi): kiem tra status va dung $.each
        $("#results").html("<ul></ul>");
        $.get(url, function (data, status) {
            if (status == "success") {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            }
        });
    });
});
