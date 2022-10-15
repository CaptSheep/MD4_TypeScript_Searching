let vina : string = '083'
let viettel : string = '032'
let mobi : string = '070'

function checkPhoneNumber(arr : string[],vina : string,mobi: string,viettel : string) {
    let vinaNumber = [];
    let viettelNumber = [];
    let mobiNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i].substring(0,3)
        if(result == vina){
            vinaNumber.push(arr[i])
        }
        else if(result == viettel){
            viettelNumber.push(arr[i])
        }
        else if(result == mobi){
            mobiNumber.push(arr[i])
        }

    }
    console.log(`So Viettel la : ${viettelNumber} ----- So Vina la : ${vinaNumber} ------ So Mobi la : ${mobiNumber}`)
}

let vinaNumber : string[] = ['083123455','032123456','070123456','083111111']
checkPhoneNumber(vinaNumber,vina,mobi,viettel)
// console.log(123)