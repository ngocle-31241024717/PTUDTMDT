/* Exercise 8.11 - Arrays of Objects */

// Mang cac doi tuong (object literal)
var countries = [
    { name: "Bahamas",        iso: "BS", capital: "Nassau",  population: 301790 },
    { name: "Canada",         iso: "CA", capital: "Ottawa",  population: 33679000 },
    { name: "Germany",        iso: "DE", capital: "Berlin",  population: 81802257 },
    { name: "Spain",          iso: "ES", capital: "Madrid",  population: 46505963 },
    { name: "United Kingdom", iso: "GB", capital: "London",  population: 62348447 }
];

/* Buoc 1: duyet mang, in ten
for (i = 0; i < countries.length; i++) {
    document.write(countries[i].name);
    document.write("<br>");
}
*/

/* Buoc 2-4: dung bien tam c va bracket notation
for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    var temp = "name";
    document.write(c[temp]);
    document.write("<br>");
}
*/

// Buoc 5 (ban cuoi): for..in duyet tung thuoc tinh cua doi tuong
for (i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='flags/" + c.iso + ".png' class='boxImg'>");
    for (var propertyName in c) {
        document.write("<strong>");
        document.write(propertyName + ": ");
        document.write("</strong>");
        document.write(c[propertyName]);
        document.write("<br>");
    }
    document.write("</div>");
}
