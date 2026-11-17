/* Exercise 10.5 - Inserting DOM Elements */

$(function () {
    // tao phan tu DOM moi
    var img = $('<img src="images/art/thumbs/13030.jpg" >');
    var panel = $('.panel');

    // Buoc 2: chen SAU panel
    panel.after(img);

    // Buoc 3-8: lan luot comment dong tren va bo comment 1 dong duoi de thu:
    // panel.before(img);        // buoc 3: chen TRUOC panel
    // panel.append(img);        // buoc 4: chen vao CUOI ben trong panel
    // panel.prepend(img);       // buoc 5: chen vao DAU ben trong panel
    // img.appendTo(panel);      // buoc 6: tuong duong append
    // img.prependTo(panel);     // buoc 7: tuong duong prepend
    // img.insertBefore(panel);  // buoc 8: tuong duong before
});
