/* Exercise 8.6 - Using Built-in JavaScript Objects */

// Buoc 2-3: String object va string literal
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write(stringOne);
document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

// Buoc 4: so sanh == va ===
if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)
    document.write("<br>stringOne has = value to stringFour");
if (stringOne === stringTwo)
    document.write("<br>stringOne has = value and = type to stringTwo");
if (stringTwo === stringThree)
    document.write("<br>stringTwo has = value and = type to stringThree");
if (stringTwo === stringFour)
    document.write("<br>stringTwo has = value and = type to stringThree");

// Buoc 5: Date
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// Buoc 6: Math
document.write(Math.PI + "<br/>");
document.write(Math.sqrt(4) + "<br/>");
document.write(Math.random() + "<br/>");
