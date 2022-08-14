let reverse = (str) => {
    const arr = [];
    for (const letter of str) {
        arr.push(letter);
    }
    return arr.reverse().join('');
}

console.log(reverse('Hello 😃'));