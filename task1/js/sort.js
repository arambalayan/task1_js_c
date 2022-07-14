function sort(arr1, arr2) {
    let target = []
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            target.push(arr1.shift())  
        } else {
            target.push(arr2.shift()) 
        }
    }
    console.log([...target, ...arr1, ...arr2])
}
    
sort([4, 7, 11], [8, 10, 20])
