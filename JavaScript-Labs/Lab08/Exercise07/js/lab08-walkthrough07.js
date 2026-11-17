/* Exercise 8.7 - Arrays */

// Buoc 2: tao mang cac ngay trong tuan
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
// document.write(daysOfWeek + "<br>");

// Buoc 3: them "Sat" vao cuoi mang
daysOfWeek.push("Sat");
// document.write(daysOfWeek + "<br/>");

// Buoc 4: them "Sun" vao dau mang
daysOfWeek.unshift("Sun");
// Buoc 5: comment dong in mang
// document.write(daysOfWeek + "<br/>");

// Buoc 6-7: in hang tieu de cua bang, ngay dai hon 3 ky tu in nghieng (<em>)
document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Buoc 8: cac ngay 1..30, thang bat dau vao Chu nhat
var dayNumber = 1;
var totalDays = 30;
while (dayNumber <= totalDays) {
    document.write("<tr>");
    for (var col = 0; col < daysOfWeek.length; col++) {
        if (dayNumber <= totalDays) {
            document.write("<td>" + dayNumber + "</td>");
            dayNumber++;
        } else {
            document.write("<td></td>");   // o trong o tuan cuoi
        }
    }
    document.write("</tr>");
}
document.write("</table>");
