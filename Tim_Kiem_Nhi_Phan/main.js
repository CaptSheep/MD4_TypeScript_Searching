function binarySearch(number, target) {
    var low = 0;
    var high = number.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (number[mid] > target) {
            high = mid + 1;
        }
        else if (number[mid] < target) {
            high = mid - 1;
        }
        else if (number[mid] == target) {
            result = mid;
            high = mid;
        }
    }
    return result;
}
var number = [1, 2, 3, 4, 5, 6, 7];
var target = 4;
var index = binarySearch(number, target);
if (index !== -1) {
    console.log("Number ".concat(target, " can find in  array at index ").concat(index));
}
else {
    console.log("Can not find number ".concat(target, " in array"));
}
