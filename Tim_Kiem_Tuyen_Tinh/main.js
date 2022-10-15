var arr = [1, 2, 5, 6, 7, 10];
var newArr = [];
function findMissingNumber(arr) {
    for (var i = 0; i <= 10; i++) {
        if (arr.indexOf(i) == -1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}
findMissingNumber(arr);
