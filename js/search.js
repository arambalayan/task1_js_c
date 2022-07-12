function search(arr, item){
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            return true;
        } else if (arr[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return false
}
    
console.log(search([4, 7, 11], 4))
