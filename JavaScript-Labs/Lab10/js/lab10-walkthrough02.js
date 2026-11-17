/* Exercise 10.2 - Basic Selectors */

// Buoc 2: chon textarea va gan value
var msg = $('#msgArea');
msg.val("here is some new text");

// Buoc 3: html() lay/gan noi dung HTML
$('#first').html("new Title");

// Buoc 4: attr() lay/gan thuoc tinh
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Buoc 5: chon tat ca <button>, khong can vong lap
var buttons = $('button');
buttons.css('background-color', 'red');

// Buoc 6: doi mau nen the body
var temp = $('body');
temp.css("background-color", "ivory");

// Buoc 7: them class cho cac phan tu .center-icons
$('.center-icons').addClass('selected');
