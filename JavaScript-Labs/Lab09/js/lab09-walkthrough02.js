/* Exercise 9.2 - DOM Family Relations */

/* Buoc 2-5: go truc tiep trong Console cua trinh duyet:
   document.getElementById("first")
   document.getElementById("first").firstChild
   document.getElementById("first").firstChild.nextSibling
   document.getElementById("first").parentNode
*/

// Buoc 6: duyet cac node con cua div "stories"
var stories = document.getElementById("stories");
for (i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Buoc 7: doi mau nen cac node KHONG phai text (nodeType 1 = element)
for (i = 0; i < stories.childNodes.length; i++) {
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "lightblue";
    }
}
