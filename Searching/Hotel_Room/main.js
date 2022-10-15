var matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
];
var newArr = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [0, 0, 3, 3]
];
function totalRoomBill(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0) {
                for (var k = i; k < arr.length; k++) {
                    arr[k][j] = 0;
                }
            }
            total += arr[i][j];
        }
    }
    console.log("Total price for all rooms is : ".concat(total));
}
totalRoomBill(matrix);
