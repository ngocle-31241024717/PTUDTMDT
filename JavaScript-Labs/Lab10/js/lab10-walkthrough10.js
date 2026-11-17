/* Exercise 10.10 - jqXHR Handling */

// Dich vu goc (xem ghi chu o Exercise 10.9). Co the doi sang "data/cities.json"
var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
// var url = "data/cities.json";

$(function () {
    $('.animLoading').hide();

    $("#consume").click(function () {
        $('.animLoading').show();

        $.get(url)
            // done chay dau tien khi thanh cong
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // fail chay khi co loi, truoc always()
            .fail(function (xhr, status, error) {
                alert("failed loading data - status=" + status +
                      " error=" + error);
            })
            // always luon chay cuoi cung
            .always(function (data) {
                $('.animLoading').fadeOut("slow");
            });
    });
});
