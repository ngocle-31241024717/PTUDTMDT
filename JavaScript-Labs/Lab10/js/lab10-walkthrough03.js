/* Exercise 10.3 - Advanced Selectors */

// Buoc 2 (buoc 3: comment lai): chon cac o password
// $(':password').css('background-color', 'yellow');

// Buoc 4: chon moi phan tu con thu 4n trong form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Buoc 5: chon <label> co chua chu "word"
$('label:contains("word")').css("color", "black");
