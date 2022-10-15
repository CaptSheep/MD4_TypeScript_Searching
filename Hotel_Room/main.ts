let matrix : number[][] = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]
    let newArr = [
        [ 0, 1, 1, 2 ],
        [ 0, 5, 0, 0 ],
        [ 0, 0, 3, 3 ] ]



function totalRoomBill(arr:number [][]){
    let total = 0;
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0) {
                for (let k = i; k < arr.length; k++) {
                    arr[k][j] = 0
                }
            }
           total += arr[i][j]

        }
    }
    console.log(`Total price for all rooms is : ${total}`)
}

totalRoomBill(matrix)