let arr = [1, 2, 5, 6, 7, 10]
let newArr : number [] = []
function findMissingNumber(arr){
    for (let i = 0; i <=10 ; i++) {
        if(arr.indexOf(i) == -1){
            newArr.push(i)
        }
    }
    console.log(newArr)
}

findMissingNumber(arr)