/* Exercise 8.9 - Functions as Objects */

var isCanadian = true;

/* Buoc 1 (ban dau):
function taxRate() {
    if (isCanadian) { return 0.05; } else { return 0.0; }
}
function calculateTax(amount) { return amount * taxRate(); }
function calculateTotal(price, quantity) {
    return (price * quantity) + calculateTax(price * quantity);
}
*/

/* Buoc 3: ham long trong ham
function calculateTax(amount) {
    return amount * taxRate();
    function taxRate() {
        if (isCanadian) { return 0.05; } else { return 0.0; }
    }
}
*/

/* Buoc 4-5: ham gan cho bien (ham la object), buoc 5 la ham an danh
function calculateTax(amount) {
    var tax = function () {
        if (isCanadian) { return 0.05; } else { return 0.0; }
    };
    return amount * tax();
}
*/

// Buoc 6 (ban cuoi): truyen ham an danh nhu mot tham so
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
