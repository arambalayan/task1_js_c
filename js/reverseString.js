function reverse(str) {
    let reverseString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    console.log(reverseString)
}
reverse('aram balayan')
