var vina = '083';
var viettel = '032';
var mobi = '070';
function checkPhoneNumber(arr, vina, mobi, viettel) {
    var vinaNumber = [];
    var viettelNumber = [];
    var mobiNumber = [];
    for (var i = 0; i < arr.length; i++) {
        var result = arr[i].substring(0, 3);
        if (result == vina) {
            vinaNumber.push(arr[i]);
        }
        else if (result == viettel) {
            viettelNumber.push(arr[i]);
        }
        else if (result == mobi) {
            mobiNumber.push(arr[i]);
        }
    }
    console.log("So Viettel la : ".concat(viettelNumber, " ----- So Vina la : ").concat(vinaNumber, " ------ So Mobi la : ").concat(mobiNumber));
}
var vinaNumber = ['083123455', '032123456', '070123456', '083111111'];
checkPhoneNumber(vinaNumber, vina, mobi, viettel);
// console.log(123)
