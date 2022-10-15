function countExistingNumber(number, value) {
    var count = 0;
    number.forEach(function (item, index) {
        if (item == value) {
            count++;
            console.log("Phan tu ".concat(value, " xuat hien lan  ").concat(count, "  tai vi tri ").concat(index, " "));
        }
    });
}
var arr = [1, 1, 2, 1, 4, 5, 0];
var value = 1;
countExistingNumber(arr, value);
