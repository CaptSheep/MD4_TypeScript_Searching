function binarySearch(number: number[], target: number) {
    let low = 0
    let high = number.length - 1
    let result = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (number[mid] > target) {
            high = mid + 1
        } else if (number[mid] < target) {
            high = mid - 1
        } else if (number[mid] == target) {
            result = mid
            high = mid
        }

    }
    return result
}

let number: number[] = [1, 2, 3, 4, 5, 6, 7]
let target: number = 4
let index:number = binarySearch(number, target)
if (index !== -1) {
    console.log(`Number ${target} can find in  array at index ${index}`)
} else {
    console.log(`Can not find number ${target} in array`)
}