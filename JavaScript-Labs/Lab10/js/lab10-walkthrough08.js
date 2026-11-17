/* Exercise 10.8 - Complex Animations */

$(function () {
    $("button").click(function () {
        // Buoc 2: chi animate thuoc tinh left
        // $("#box").animate({ left: '495px' });

        // Buoc 3: animate 3 thuoc tinh cung luc
        // $("#box").animate({ left: '495px', opacity: '1', height: '50px' });

        // Buoc 4 (ban cuoi): 3 animation noi tiep nhau
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({ top: '400px', opacity: '0.2' })
            .animate({ height: '200px' }, 2000);
    });
});
