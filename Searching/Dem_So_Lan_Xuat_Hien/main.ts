function countExistingNumber(number: number[], value: number) {
    let count = 0
    number.forEach((item, index) => {
        if (item == value) {
            count++
            console.log(`Phan tu ${value} xuat hien lan  ${count}  tai vi tri ${index} `)
        }
    })

}
let arr: number[] = [1, 1, 2, 1, 4, 5, 0]
let value: number = 1
countExistingNumber(arr, value)
