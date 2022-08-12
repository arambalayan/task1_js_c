function sortTwoArrays(arr1, arr2) {
    let target = []
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            target.push(arr1.shift())
        } else {
            target.push(arr2.shift())
        }
    }
    return [...target, ...arr1, ...arr2]
}

function merge(arr1, arr2, arr3, arr4, arr5) {
    let arr = [...arguments]
    let newArr = []
    while (arr.length > 1) {
        let a = arr.shift()
        let b = arr.shift()
        newArr.push(sortTwoArrays(a, b))
    }
    let tempArr = sortTwoArrays(...newArr)
    newArr = []
    newArr.push(tempArr)
    return sortTwoArrays(...newArr, ...arr)
}

let arr1 = [1, 78, 90, 92];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [2, 20];
let arr4 = [100, 200];
let arr5 = [50, 53];
console.log(merge(arr1, arr2, arr3, arr4, arr5))
